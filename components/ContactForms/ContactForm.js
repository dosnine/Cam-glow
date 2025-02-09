import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { supabase } from '/lib/supabase';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingForm() {
  const [state, handleSubmit] = useForm("xgeggljb");
  const [hairstyles, setHairstyles] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [bookedDates, setBookedDates] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hairstyle: '',
    date: '',
    notes: ''
  });

  // Fetch hairstyles and available dates
  useEffect(() => {
    const fetchData = async () => {
      const { data: hairstylesData } = await supabase
        .from('hairstyles')
        .select('*');
      setHairstyles(hairstylesData);

      const { data: datesData } = await supabase
        .from('available_dates')
        .select('*')
        .gte('date', new Date().toISOString())
        .eq('is_available', true);
      setAvailableDates(datesData);

      const { data: bookedData } = await supabase
        .from('appointments')
        .select('appointment_date');
      setBookedDates(new Set(bookedData.map(d => d.appointment_date)));
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    const { data, error } = await supabase
      .from('appointments')
      .insert([{
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        hairstyle_id: formData.hairstyle,
        appointment_date: formData.date,
        notes: formData.notes
      }]);
    if (!error && state.succeeded) {
      setFormData({ name: '', email: '', phone: '', hairstyle: '', date: '', notes: '' });
    }
  };

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-100 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Booking Confirmed! 🎉
          </h2>
          <p className="text-lg text-gray-600">
            We've sent a confirmation email to {formData.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-purple-100">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
              Book Your Style
            </h2>
            <p className="text-lg text-gray-600">Secure your appointment in 3 easy steps</p>
          </div>

          <Calendar
            onChange={(date) => setFormData({...formData, date: date.toISOString().split('T')[0]})}
            tileDisabled={({ date }) => bookedDates.has(date.toISOString().split('T')[0])}
          />

          <div className="space-y-4">
            <select
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              value={formData.hairstyle}
              onChange={(e) => setFormData({...formData, hairstyle: e.target.value})}
              required
            >
              <option value="">Select Hairstyle</option>
              {hairstyles.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.name} (JMD ${style.min_price} - ${style.max_price})
                </option>
              ))}
            </select>

            <textarea
              placeholder="Special requests or notes"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              rows="3"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            disabled={state.submitting}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-pink-200 disabled:bg-gray-400"
          >
            {state.submitting ? 'Booking...' : 'Confirm Appointment →'}
          </button>
        </form>
      </div>
    </div>
  );
}
