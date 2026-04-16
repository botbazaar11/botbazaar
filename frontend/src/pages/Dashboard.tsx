import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout noise-overlay noise-soft">
      <nav className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="logo">Bot<span>Bazaar</span></Link>
          <div className="bot-status"><div className="dot"></div> Bot is Live</div>
        </div>
        
        <ul className="nav-menu">
          <li><span className="nav-link active">📊 Overview</span></li>
          <li><span className="nav-link">💬 Chat Logs</span></li>
          <li><span className="nav-link">📦 Orders <span style={{background:'var(--green)',color:'#000',padding:'2px 6px',borderRadius:'4px',fontSize:'10px',marginLeft:'auto'}}>2 New</span></span></li>
          <li><span className="nav-link">🛍️ Products/Menu</span></li>
          <li><span className="nav-link">⚙️ Bot Settings</span></li>
        </ul>
        
        <div className="user-profile">
          <div className="avatar">🏪</div>
          <div className="user-info">
            <div className="name">Sharma Medical</div>
            <div className="plan">Pro Plan (₹299/mo)</div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="content-wrapper">
          
          <div className="header-row">
            <div>
              <h1>Dashboard</h1>
              <p>Here's what your bot has been up to today.</p>
            </div>
            <button className="btn-primary" onClick={() => alert('Link copied!')}>Share Store Link</button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="label">Conversations Today</div>
              <div className="value">42</div>
              <div className="trend up">↗ 12% vs yesterday</div>
            </div>
            <div className="stat-card">
              <div className="label">Auto-resolved Queries</div>
              <div className="value">88%</div>
              <div className="trend up">↗ Saved 2.5 hrs</div>
            </div>
            <div className="stat-card">
              <div className="label">Orders Value Generated</div>
              <div className="value">₹3,450</div>
              <div className="trend up">↗ 5% vs yesterday</div>
            </div>
            <div className="stat-card">
              <div className="label">New Leads</div>
              <div className="value">8</div>
              <div className="trend down">↘ 2 vs yesterday</div>
            </div>
          </div>

          <div className="dashboard-grid">
            
            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">Recent Orders via WhatsApp</div>
                <span className="panel-link" style={{cursor:'pointer'}}>View All →</span>
              </div>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD-4029</td>
                    <td>Rajesh Kumar<br/><span style={{fontSize:'11px',color:'var(--muted)'}}>+91 98765 43210</span></td>
                    <td>2x Dolo 650, 1x Vicks</td>
                    <td>₹120</td>
                    <td><span className="badge pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-4028</td>
                    <td>Amit Singh<br/><span style={{fontSize:'11px',color:'var(--muted)'}}>+91 91234 56789</span></td>
                    <td>1x Protinex Powder (Chocolate)</td>
                    <td>₹580</td>
                    <td><span className="badge pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-4027</td>
                    <td>Priya Sharma<br/><span style={{fontSize:'11px',color:'var(--muted)'}}>+91 99887 76655</span></td>
                    <td>Hand Sanitizer 500ml...</td>
                    <td>₹250</td>
                    <td><span className="badge completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-4026</td>
                    <td>Abdul Rahman<br/><span style={{fontSize:'11px',color:'var(--muted)'}}>+91 98989 89898</span></td>
                    <td>Baby Diapers (L size)</td>
                    <td>₹899</td>
                    <td><span className="badge completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="panel">
              <div className="panel-header">
                <div className="panel-title">Live Bot Activity</div>
                <span style={{display:'flex',alignItems:'center',gap:'4px',fontSize:'11px',color:'var(--muted)'}}><div style={{width:'6px',height:'6px',background:'var(--green)',borderRadius:'50%'}}></div> Intercepting</span>
              </div>
              <div className="chat-preview">
                
                <div className="chat-msg customer">
                  <div className="chat-bubble">Do you have multivitamin gummies for kids?</div>
                  <div className="chat-time">10:42 AM - Neha</div>
                </div>
                
                <div className="chat-msg bot">
                  <div className="chat-bubble">Yes, Neha! We have 'Supradyn Kids' and 'Centrum Kids' gummies in stock right now. 🌟<br/><br/>Supradyn (30s): ₹240<br/>Centrum (30s): ₹320<br/><br/>Reply with an amount to order!</div>
                  <div className="chat-time">10:42 AM - AI</div>
                </div>

                <div className="chat-msg customer">
                  <div className="chat-bubble">Send 1 Supradyn to D-40, Sector 15.</div>
                  <div className="chat-time">10:45 AM - Neha</div>
                </div>

                <div className="chat-msg bot">
                  <div className="chat-bubble">Order noted! 📝<br/>1x Supradyn Kids (₹240).<br/>Will be delivered in 30 mins to D-40, Sector 15. Pay by UPI or Cash on delivery.</div>
                  <div className="chat-time">10:45 AM - AI</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
