import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setup.css';

export default function Setup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    bizName: '',
    bizType: 'Grocery/Kirana',
    openTime: '09:00',
    closeTime: '21:00',
    closedDays: '',
    products: '',
    instructions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (currentStep === 1 && !formData.bizName.trim()) {
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep <= totalSteps) {
      if (!validateStep()) return;
      if (currentStep === totalSteps) {
        // Simulate API call
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 1500);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="setup-page noise-overlay">
      <nav>
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Bot<span>Bazaar</span></a>
      </nav>

      <main className="wizard-main">
        <div className="setup-card">
          {currentStep <= totalSteps && (
             <div className="progress-container">
               <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
             </div>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            
            {currentStep === 1 && (
              <div className="step-content active">
                <h2>What's your business called?</h2>
                <p className="step-subtitle">This is the name your bot will use to greet customers.</p>
                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" className="form-control" name="bizName" value={formData.bizName} onChange={handleChange} placeholder="e.g. Sharma Medical Store" required />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="step-content active">
                <h2>What type of business is it?</h2>
                <p className="step-subtitle">Helping the AI understand your industry.</p>
                <div className="form-group">
                  <div className="pill-group">
                    {['Grocery/Kirana', 'Pharmacy', 'Salon/Spa', 'Restaurant', 'Other'].map(type => (
                      <div key={type} style={{display:'inline-block'}}>
                        <input type="radio" name="bizType" id={type} value={type} className="pill-input" checked={formData.bizType === type} onChange={handleChange} />
                        <label htmlFor={type} className="pill-label">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-content active">
                <h2>What are your operating hours?</h2>
                <p className="step-subtitle">The bot will use this to manage customer expectations.</p>
                <div className="form-group">
                  <label>Opening Time</label>
                  <input type="time" className="form-control" name="openTime" value={formData.openTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Closing Time</label>
                  <input type="time" className="form-control" name="closeTime" value={formData.closeTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Closed Days (Optional)</label>
                  <input type="text" className="form-control" name="closedDays" value={formData.closedDays} onChange={handleChange} placeholder="e.g. Sundays" />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="step-content active">
                <h2>Top requested items or services?</h2>
                <p className="step-subtitle">Train your AI instantly by giving it common queries or a brief menu/price list.</p>
                <div className="form-group">
                  <label>Services/Products (Comma separated)</label>
                  <textarea className="form-control" name="products" value={formData.products} onChange={handleChange} rows={4} placeholder="e.g. Dolo 650 - Rs30, Cough Syrup - Rs120, Delivery available within 5km..."></textarea>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="step-content active">
                <h2>Any special instructions?</h2>
                <p className="step-subtitle">How should the bot behave? E.g., Language preference, payment methods.</p>
                <div className="form-group">
                  <label>Key Instructions for the AI</label>
                  <textarea className="form-control" name="instructions" value={formData.instructions} onChange={handleChange} rows={4} placeholder="e.g. Always reply in Hinglish. Accept orders via UPI only."></textarea>
                </div>
              </div>
            )}

            {currentStep > totalSteps && (
              <div className="step-content active">
                <div className="success-state">
                  <div className="success-icon">✨</div>
                  <h2>Your AI is ready!</h2>
                  <p className="step-subtitle">Scan this QR to connect to WhatsApp & take your bot live.</p>
                  <div className="qr-placeholder">
                    {/* Simulated QR SVG */}
                    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" fill="white"/>
                      <path d="M10 10H40V40H10V10ZM20 20V30H30V20H20Z" fill="black"/>
                      <path d="M60 10H90V40H60V10ZM70 20V30H80V20H70Z" fill="black"/>
                      <path d="M10 60H40V90H10V60ZM20 70V80H30V70H20Z" fill="black"/>
                      <rect x="50" y="50" width="10" height="10" fill="black"/>
                      <rect x="70" y="50" width="20" height="10" fill="black"/>
                      <rect x="50" y="70" width="20" height="10" fill="black"/>
                      <rect x="80" y="70" width="10" height="20" fill="black"/>
                      <rect x="60" y="80" width="10" height="10" fill="black"/>
                      <rect x="40" y="10" width="10" height="10" fill="black"/>
                      <rect x="40" y="30" width="10" height="10" fill="black"/>
                    </svg>
                  </div>
                  <button className="btn btn-next" onClick={() => navigate('/dashboard')} style={{marginTop:20}}>Go to Dashboard</button>
                </div>
              </div>
            )}

          </form>

          {currentStep <= totalSteps && (
            <div className="wizard-footer">
              <button className="btn btn-back" onClick={prevStep} disabled={currentStep === 1}>Back</button>
              <button className="btn btn-next" onClick={nextStep}>
                {currentStep === totalSteps ? 'Build My Bot 🚀' : 'Continue →'}
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
