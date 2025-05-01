 AI-Enhanced Hourly Sheet Tracking System
Live Demo: neuralnomads.vercel.app

This is a full-stack AI-powered system to enhance real-time monitoring on the factory floor through smart production tracking, anomaly detection, and predictive maintenance.

📦 Project Overview
Hourly Sheet logs are digitized and enhanced with AI for:

Conversational insights via a chatbot
Predictive analytics for downtime
Anomaly detection in operator/machine performance
💡 Key Features
🧠 Conversational AI Assistant
Ask questions like:
“How many units did Operator Y produce last shift?”
“Show today’s total defects by machine X.”
“Predict downtime risk for Machine Z.”
🔧 Downtime Prediction
Predict machine breakdowns using historical logs and usage patterns.
🚨 Anomaly Detection
Detect unusual patterns in production, such as sudden efficiency drops.
🧾 Hourly Sheet Data Fields
Field Name	Description
Date & Shift Details	Date and shift time
Machine/Workstation ID	Unique machine ID
Operator Name	Responsible operator
Product Name / Part #	Product being manufactured
Target Output	Planned production per hour
Actual Output	Actual production per hour
Cumulative Output	Total output from shift start
Defects/Rework Units	Defective or rework items
Downtime (Minutes)	Machine idle time
Reason for Downtime	Reason for any recorded downtime
Operator Remarks	Optional comments
⚙️ Tech Stack
Frontend: Next.js, TailwindCSS
Backend: Node.js, Vercel Edge Functions
AI Modules: Python (for ML models)
Models Used:
Random Forest (Downtime Prediction)
Autoencoders / Isolation Forest (Anomaly Detection)
GPT-based (Conversational Assistant)
📁 Project Structure
/app                 # Next.js pages and routing
/components          # UI components
/styles              # Global styles (TailwindCSS)
/public              # Static assets
/utils               # Helper functions
/models              # AI/ML model integration logic
🛠️ Installation
git clone https://github.com/yourusername/Manufacturing-main.git
cd Manufacturing-main
pnpm install
pnpm dev
Ensure you have pnpm installed. You can also use npm or yarn.

🧠 AI Capabilities
Feature	Model	Output
Conversational AI	GPT API	Natural language answers
Downtime Prediction	Random Forest	Probability of machine failure
Anomaly Detection	Autoencoder/IF	Alerts on performance deviations
📈 Deployment
This project is deployed on Vercel:
🔗 https://neuralnomads.vercel.app

📌 Future Enhancements
📡 Live sensor data integration (via MQTT)
📲 Mobile dashboard with push alerts
📊 Visual analytics for production trends 
