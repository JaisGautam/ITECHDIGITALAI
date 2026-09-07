// // // // // // // const express = require('express');
// // // // // // // const mongoose = require('mongoose');
// // // // // // // const cors = require('cors');

// // // // // // // const app =express();
// // // // // // // app.use(express.json());
// // // // // // // app.use(cors());

// // // // // // // // Aapka MongoDB Connection String aur Database Name ('landing page')
// // // // // // // const MONGO_URI = "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // // mongoose.connect(MONGO_URI)
// // // // // // //   .then(() => console.log('MongoDB Connected Successfully to Database: landing page'))
// // // // // // //   .catch(err => console.error('MongoDB Connection Error:', err));

// // // // // // // // Mongoose Schema aur Model
// // // // // // // const leadSchema = new mongoose.Schema({
// // // // // // //     name: { type: String, required: true },
// // // // // // //     phone: { type: String, required: true },
// // // // // // //     date: { type: Date, default: Date.now }
// // // // // // // });

// // // // // // // const Lead = mongoose.model('Lead', leadSchema);

// // // // // // // // API Route for Form Submission
// // // // // // // app.post('/api/leads', async (req, res) => {
// // // // // // //     try {
// // // // // // //         const { name, phone } = req.body;
// // // // // // //         const newLead = new Lead({ name, phone });
// // // // // // //         await newLead.save();
// // // // // // //         res.status(201).json({ success: true, message: 'Data saved successfully' });
// // // // // // //     } catch (error) {
// // // // // // //         console.error(error);
// // // // // // //         res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // //     }
// // // // // // // });

// // // // // // // const PORT = 5000;
// // // // // // // app.listen(PORT, () => {
// // // // // // //     console.log(`Server is running on port ${PORT}`);
// // // // // // // });


    
        
        
// // // // // //         const express = require('express');
// // // // // //         const mongoose = require('mongoose');
// // // // // //         const cors = require('cors');
// // // // // //         require('dotenv').config();

// // // // // //         const app = express();
// // // // // //         app.use(express.json());
// // // // // //         app.use(cors());

// // // // // //         // MongoDB Connection String (from .env)
// // // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // //         mongoose.connect(MONGO_URI)
// // // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // // //         // Schema & Model (with email & state)
// // // // // //         const leadSchema = new mongoose.Schema({
// // // // // //             name: { type: String, required: true },
// // // // // //             phone: { type: String, required: true },
// // // // // //             email: { type: String, required: true },
// // // // // //             state: { type: String, required: true },
// // // // // //             date: { type: Date, default: Date.now }
// // // // // //         });

// // // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // // //         // API Route
// // // // // //         app.post('/api/leads', async (req, res) => {
// // // // // //             try {
// // // // // //                 const { name, phone, email, state } = req.body;
// // // // // //                 if (!name || !phone || !email || !state) {
// // // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // // //                 }
// // // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // // //                 await newLead.save();
// // // // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // // // //             } catch (error) {
// // // // // //                 console.error(error);
// // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // //             }
// // // // // //         });

// // // // // //         const PORT = process.env.PORT || 5000;
// // // // // //         app.listen(PORT, () => {
// // // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // // //         });

    


 
// // // // //         const express = require('express');
// // // // //         const mongoose = require('mongoose');
// // // // //         const cors = require('cors');
// // // // //         require('dotenv').config();

// // // // //         const app = express();
// // // // //         app.use(express.json());
// // // // //         app.use(cors());

// // // // //         // MongoDB Connection String (from .env)
// // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // //         mongoose.connect(MONGO_URI)
// // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // //         // Schema & Model (with email & state)
// // // // //         const leadSchema = new mongoose.Schema({
// // // // //             name: { type: String, required: true },
// // // // //             phone: { type: String, required: true },
// // // // //             email: { type: String, required: true },
// // // // //             state: { type: String, required: true },
// // // // //             date: { type: Date, default: Date.now }
// // // // //         });

// // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // //         // API Route
// // // // //         app.post('/api/leads', async (req, res) => {
// // // // //             try {
// // // // //                 const { name, phone, email, state } = req.body;
// // // // //                 if (!name || !phone || !email || !state) {
// // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // //                 }
// // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // //                 await newLead.save();
// // // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // // //             } catch (error) {
// // // // //                 console.error(error);
// // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // //             }
// // // // //         });

// // // // //         const PORT = process.env.PORT || 5000;
// // // // //         app.listen(PORT, () => {
// // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // //         });

     
    
// // // //  const express = require('express');
// // // //         const mongoose = require('mongoose');
// // // //         const cors = require('cors');
// // // //         require('dotenv').config();

// // // //         const app = express();
// // // //         app.use(express.json());
// // // //         app.use(cors());

// // // //         // MongoDB Connection String (from .env)
// // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // //         mongoose.connect(MONGO_URI)
// // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // //         // Schema & Model (with email & state)
// // // //         const leadSchema = new mongoose.Schema({
// // // //             name: { type: String, required: true },
// // // //             phone: { type: String, required: true },
// // // //             email: { type: String, required: true },
// // // //             state: { type: String, required: true },
// // // //             date: { type: Date, default: Date.now }
// // // //         });

// // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // //         // API Route
// // // //         app.post('/api/leads', async (req, res) => {
// // // //             try {
// // // //                 const { name, phone, email, state } = req.body;
// // // //                 if (!name || !phone || !email || !state) {
// // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // //                 }
// // // //                 const newLead = new Lead({ name, phone, email, state });
// // // //                 await newLead.save();
// // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // //             } catch (error) {
// // // //                 console.error(error);
// // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // //             }
// // // //         });

// // // //         const PORT = process.env.PORT || 5000;
// // // //         app.listen(PORT, () => {
// // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // //         });

// // //         const express = require('express');
// // //         const mongoose = require('mongoose');
// // //         const cors = require('cors');
// // //         require('dotenv').config();

// // //         const app = express();
// // //         app.use(express.json());
// // //         app.use(cors());

// // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // //         mongoose.connect(MONGO_URI)
// // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // //         // Schema with payment status
// // //         const leadSchema = new mongoose.Schema({
// // //             name: { type: String, required: true },
// // //             phone: { type: String, required: true, unique: true },
// // //             email: { type: String, required: true },
// // //             state: { type: String, required: true },
// // //             paymentStatus: { type: String, default: 'pending' }, // pending, completed
// // //             paymentDate: { type: Date },
// // //             date: { type: Date, default: Date.now }
// // //         });

// // //         const Lead = mongoose.model('Lead', leadSchema);

// // //         // POST - Save lead
// // //         app.post('/api/leads', async (req, res) => {
// // //             try {
// // //                 const { name, phone, email, state } = req.body;
// // //                 if (!name || !phone || !email || !state) {
// // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // //                 }
                
// // //                 // Check if lead already exists
// // //                 let lead = await Lead.findOne({ phone });
// // //                 if (lead) {
// // //                     return res.status(400).json({ success: false, message: 'This number is already registered' });
// // //                 }
                
// // //                 const newLead = new Lead({ name, phone, email, state });
// // //                 await newLead.save();
// // //                 res.status(201).json({ success: true, message: 'Lead saved', data: newLead });
// // //             } catch (error) {
// // //                 console.error(error);
// // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // //             }
// // //         });

// // //         // PUT - Update payment status
// // //         app.put('/api/leads/payment', async (req, res) => {
// // //             try {
// // //                 const { phone, paymentStatus } = req.body;
// // //                 if (!phone) {
// // //                     return res.status(400).json({ success: false, message: 'Phone number required' });
// // //                 }
                
// // //                 const lead = await Lead.findOne({ phone });
// // //                 if (!lead) {
// // //                     return res.status(404).json({ success: false, message: 'Lead not found' });
// // //                 }
                
// // //                 lead.paymentStatus = paymentStatus || 'completed';
// // //                 lead.paymentDate = new Date();
// // //                 await lead.save();
                
// // //                 res.json({ success: true, message: 'Payment status updated', data: lead });
// // //             } catch (error) {
// // //                 console.error(error);
// // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // //             }
// // //         });

// // //         // POST - Save payment to Google Sheet (via webhook)
// // //         app.post('/api/leads/payment-sheet', async (req, res) => {
// // //             try {
// // //                 const { name, phone, email, state, paymentStatus, paymentDate } = req.body;
                
// // //                 // Here you can integrate with Google Sheets API
// // //                 // For now, we'll just log and save to MongoDB
// // //                 console.log('📊 Payment recorded for:', { name, phone, email, state, paymentStatus, paymentDate });
                
// // //                 // You can add Google Sheets integration here
// // //                 // const sheetUrl = 'YOUR_GOOGLE_SHEET_WEBHOOK_URL';
// // //                 // await fetch(sheetUrl, { method: 'POST', body: JSON.stringify(req.body) });
                
// // //                 res.json({ success: true, message: 'Payment recorded successfully' });
// // //             } catch (error) {
// // //                 console.error(error);
// // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // //             }
// // //         });

// // //         // GET - Get all leads with payment status (for admin)
// // //         app.get('/api/leads', async (req, res) => {
// // //             try {
// // //                 const leads = await Lead.find().sort({ date: -1 });
// // //                 const total = leads.length;
// // //                 const paid = leads.filter(l => l.paymentStatus === 'completed').length;
// // //                 const pending = total - paid;
                
// // //                 res.json({ 
// // //                     success: true, 
// // //                     total,
// // //                     paid,
// // //                     pending,
// // //                     data: leads 
// // //                 });
// // //             } catch (error) {
// // //                 // res.status(500).json({ success: false, message: error.message });
// // //             }
// // //         });

// // //         const PORT = process.env.PORT || 5000;
// // //         app.listen(PORT, () => {
// // //             console.log(`🚀 Server running on port ${PORT}`);
// // //         });
    

// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // require("dotenv").config();

// // const app = express();

// // app.use(cors());
// // app.use(express.json());


// // /*
// // |--------------------------------------------------------------------------
// // | CONFIGURATION
// // |--------------------------------------------------------------------------
// // */

// // const PORT = process.env.PORT || 5000;

// // const MONGO_URI = process.env.MONGO_URI;

// // const EMAIL_USER = process.env.EMAIL_USER;

// // const EMAIL_PASS = process.env.EMAIL_PASS;

// // const ZOOM_MEETING_LINK =
// //     process.env.ZOOM_MEETING_LINK ||
// //     "https://zoom.us/j/YOUR_MEETING_ID";

// // const WHATSAPP_COMMUNITY_LINK =
// //     process.env.WHATSAPP_COMMUNITY_LINK ||
// //     "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK";


// // /*
// // |--------------------------------------------------------------------------
// // | VALIDATE ENVIRONMENT
// // |--------------------------------------------------------------------------
// // */

// // if (!MONGO_URI) {

// //     console.error(
// //         "❌ MONGO_URI is missing in .env"
// //     );

// // }

// // if (!EMAIL_USER || !EMAIL_PASS) {

// //     console.warn(
// //         "⚠️ EMAIL_USER or EMAIL_PASS is missing."
// //     );

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | MONGODB CONNECTION
// // |--------------------------------------------------------------------------
// // */

// // mongoose
// //     .connect(MONGO_URI)
// //     .then(() => {

// //         console.log(
// //             "✅ MongoDB Connected"
// //         );

// //     })
// //     .catch((error) => {

// //         console.error(
// //             "❌ MongoDB Connection Error:",
// //             error.message
// //         );

// //     });


// // /*
// // |--------------------------------------------------------------------------
// // | LEAD SCHEMA
// // |--------------------------------------------------------------------------
// // */

// // const leadSchema =
// //     new mongoose.Schema({

// //         name: {
// //             type: String,
// //             required: true,
// //             trim: true
// //         },

// //         phone: {
// //             type: String,
// //             required: true,
// //             unique: true,
// //             trim: true
// //         },

// //         email: {
// //             type: String,
// //             required: true,
// //             trim: true,
// //             lowercase: true
// //         },

// //         state: {
// //             type: String,
// //             required: true,
// //             trim: true
// //         },

// //         communityJoined: {
// //             type: Boolean,
// //             default: false
// //         },

// //         communityJoinDate: {
// //             type: Date
// //         },

// //         zoomEmailSent: {
// //             type: Boolean,
// //             default: false
// //         },

// //         zoomReminderSent: {
// //             type: Boolean,
// //             default: false
// //         },

// //         registrationDate: {
// //             type: Date,
// //             default: Date.now
// //         }

// //     });


// // const Lead =
// //     mongoose.model(
// //         "Lead",
// //         leadSchema
// //     );


// // /*
// // |--------------------------------------------------------------------------
// // | EMAIL TRANSPORTER
// // |--------------------------------------------------------------------------
// // |
// // | For Gmail use:
// // |
// // | EMAIL_USER=yourgmail@gmail.com
// // | EMAIL_PASS=your 16 digit Gmail App Password
// // |
// // |--------------------------------------------------------------------------
// // */

// // let transporter = null;


// // if (EMAIL_USER && EMAIL_PASS) {

// //     transporter =
// //         nodemailer.createTransport({

// //             service: "gmail",

// //             auth: {
// //                 user: EMAIL_USER,
// //                 pass: EMAIL_PASS
// //             }

// //         });

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | WEBINAR DATES
// // |--------------------------------------------------------------------------
// // |
// // | India timezone: Asia/Kolkata (+05:30)
// // |
// // */

// // const WEBINAR_DATES = [

// //     "2026-09-08T20:00:00+05:30",

// //     "2026-09-09T20:00:00+05:30",

// //     "2026-09-10T20:00:00+05:30"

// // ];


// // /*
// // |--------------------------------------------------------------------------
// // | EMAIL - REGISTRATION CONFIRMATION
// // |--------------------------------------------------------------------------
// // */

// // async function sendRegistrationEmail(lead) {

// //     if (!transporter) {

// //         console.warn(
// //             "⚠️ Email transporter not configured."
// //         );

// //         return false;

// //     }


// //     const mailOptions = {

// //         from: `"I TECH AI" <${EMAIL_USER}>`,

// //         to: lead.email,

// //         subject:
// //             "🎉 Your Webinar Registration is Confirmed | I TECH AI",

// //         html: `

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta charset="UTF-8">

// // </head>

// // <body style="
// //     margin:0;
// //     padding:0;
// //     background:#f5f5f5;
// //     font-family:Arial,sans-serif;
// // ">

// // <div style="
// //     max-width:600px;
// //     margin:30px auto;
// //     background:#ffffff;
// //     border-radius:12px;
// //     overflow:hidden;
// // ">

// // <div style="
// //     background:#d35400;
// //     color:#ffffff;
// //     padding:25px;
// //     text-align:center;
// // ">

// // <h1 style="margin:0;">
// //     I TECH AI
// // </h1>

// // <p style="margin:8px 0 0;">
// //     Webinar Registration
// // </p>

// // </div>


// // <div style="
// //     padding:30px;
// // ">

// // <h2>
// //     Hello ${escapeHtml(lead.name)} 👋
// // </h2>


// // <p style="
// //     color:#555;
// //     line-height:1.7;
// // ">

// // Your registration for the I TECH AI webinar
// // has been successfully confirmed.

// // </p>


// // <div style="
// //     background:#fff3e2;
// //     padding:20px;
// //     border-radius:10px;
// //     margin:20px 0;
// // ">

// // <h3 style="
// //     margin-top:0;
// //     color:#d35400;
// // ">

// // 📅 Webinar Details

// // </h3>

// // <p>
// // <strong>Date:</strong>
// // 8th, 9th & 10th September 2026
// // </p>

// // <p>
// // <strong>Time:</strong>
// // 8:00 PM – 9:00 PM
// // </p>

// // <p>
// // <strong>Speaker:</strong>
// // Acharya Pankaj Ji
// // </p>

// // <p>
// // <strong>Platform:</strong>
// // Zoom
// // </p>

// // </div>


// // <div style="
// //     text-align:center;
// //     margin:25px 0;
// // ">

// // <a
// //     href="${ZOOM_MEETING_LINK}"
// //     target="_blank"
// //     style="
// //         display:inline-block;
// //         background:#2D8CFF;
// //         color:#ffffff;
// //         text-decoration:none;
// //         padding:14px 25px;
// //         border-radius:8px;
// //         font-weight:bold;
// //     "
// // >

// // 🎥 JOIN ZOOM WEBINAR

// // </a>

// // </div>


// // <div style="
// //     text-align:center;
// //     margin:25px 0;
// // ">

// // <a
// //     href="${WHATSAPP_COMMUNITY_LINK}"
// //     target="_blank"
// //     style="
// //         display:inline-block;
// //         background:#25D366;
// //         color:#ffffff;
// //         text-decoration:none;
// //         padding:14px 25px;
// //         border-radius:8px;
// //         font-weight:bold;
// //     "
// // >

// // 💬 JOIN WHATSAPP COMMUNITY

// // </a>

// // </div>


// // <p style="
// //     color:#666;
// //     line-height:1.7;
// // ">

// // Please save this email.
// // We will also send you a reminder before the webinar.

// // </p>


// // <p>
// // See you at the webinar! 🎓
// // </p>


// // </div>


// // <div style="
// //     background:#222;
// //     color:#aaa;
// //     padding:18px;
// //     text-align:center;
// //     font-size:12px;
// // ">

// // © 2026 I TECH AI

// // </div>

// // </div>

// // </body>

// // </html>

// // `

// //     };


// //     try {

// //         await transporter.sendMail(
// //             mailOptions
// //         );

// //         console.log(
// //             `📧 Registration email sent to ${lead.email}`
// //         );

// //         return true;

// //     } catch (error) {

// //         console.error(
// //             "❌ Registration email error:",
// //             error.message
// //         );

// //         return false;

// //     }

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | EMAIL - WEBINAR REMINDER
// // |--------------------------------------------------------------------------
// // */

// // async function sendReminderEmail(lead) {

// //     if (!transporter) {

// //         return false;

// //     }


// //     const mailOptions = {

// //         from:
// //             `"I TECH AI" <${EMAIL_USER}>`,

// //         to: lead.email,

// //         subject:
// //             "⏰ Webinar starts in 30 minutes | I TECH AI",

// //         html: `

// // <!DOCTYPE html>

// // <html>

// // <head>

// // <meta charset="UTF-8">

// // </head>

// // <body style="
// //     margin:0;
// //     padding:0;
// //     background:#f5f5f5;
// //     font-family:Arial,sans-serif;
// // ">

// // <div style="
// //     max-width:600px;
// //     margin:30px auto;
// //     background:#ffffff;
// //     border-radius:12px;
// //     overflow:hidden;
// // ">

// // <div style="
// //     background:#d35400;
// //     color:#ffffff;
// //     padding:25px;
// //     text-align:center;
// // ">

// // <h1>
// //     ⏰ Webinar Reminder
// // </h1>

// // </div>


// // <div style="
// //     padding:30px;
// // ">

// // <h2>
// //     Hello ${escapeHtml(lead.name)} 👋
// // </h2>


// // <p style="
// //     font-size:16px;
// //     line-height:1.7;
// // ">

// // Your I TECH AI webinar starts in
// // <strong>30 minutes</strong>.

// // </p>


// // <div style="
// //     background:#fff3e2;
// //     padding:20px;
// //     border-radius:10px;
// // ">

// // <p>
// // <strong>📅 Date:</strong>
// // 8th, 9th & 10th September 2026
// // </p>

// // <p>
// // <strong>⏰ Time:</strong>
// // 8:00 PM – 9:00 PM
// // </p>

// // <p>
// // <strong>🎤 Speaker:</strong>
// // Acharya Pankaj Ji
// // </p>

// // </div>


// // <div style="
// //     text-align:center;
// //     margin:30px 0;
// // ">

// // <a
// //     href="${ZOOM_MEETING_LINK}"
// //     target="_blank"
// //     style="
// //         display:inline-block;
// //         background:#2D8CFF;
// //         color:#ffffff;
// //         text-decoration:none;
// //         padding:15px 30px;
// //         border-radius:8px;
// //         font-weight:bold;
// //     "
// // >

// // 🎥 JOIN ZOOM NOW

// // </a>

// // </div>


// // <p style="
// //     color:#666;
// //     line-height:1.7;
// // ">

// // Please join a few minutes before the session starts.

// // </p>


// // </div>


// // <div style="
// //     background:#222;
// //     color:#aaa;
// //     padding:18px;
// //     text-align:center;
// //     font-size:12px;
// // ">

// // © 2026 I TECH AI

// // </div>

// // </div>

// // </body>

// // </html>

// // `

// //     };


// //     try {

// //         await transporter.sendMail(
// //             mailOptions
// //         );

// //         console.log(
// //             `🔔 Reminder sent to ${lead.email}`
// //         );

// //         return true;

// //     } catch (error) {

// //         console.error(
// //             "❌ Reminder email error:",
// //             error.message
// //         );

// //         return false;

// //     }

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | ESCAPE HTML
// // |--------------------------------------------------------------------------
// // */

// // function escapeHtml(value) {

// //     return String(value)

// //         .replace(/&/g, "&amp;")

// //         .replace(/</g, "&lt;")

// //         .replace(/>/g, "&gt;")

// //         .replace(/"/g, "&quot;")

// //         .replace(/'/g, "&#039;");

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | HEALTH CHECK
// // |--------------------------------------------------------------------------
// // */

// // app.get(
// //     "/",
// //     (req, res) => {

// //         res.json({

// //             success: true,

// //             message:
// //                 "I TECH AI Webinar API is running",

// //             webinarDates:
// //                 WEBINAR_DATES

// //         });

// //     }
// // );


// // /*
// // |--------------------------------------------------------------------------
// // | POST /api/leads
// // |--------------------------------------------------------------------------
// // |
// // | Register user.
// // |
// // */

// // app.post(
// //     "/api/leads",
// //     async (req, res) => {

// //         try {

// //             const {
// //                 name,
// //                 phone,
// //                 email,
// //                 state,
// //                 communityJoined
// //             } = req.body;


// //             /*
// //              * Validate fields
// //              */

// //             if (
// //                 !name ||
// //                 !phone ||
// //                 !email ||
// //                 !state
// //             ) {

// //                 return res.status(400).json({

// //                     success: false,

// //                     message:
// //                         "Please fill all required fields."

// //                 });

// //             }


// //             /*
// //              * Community validation
// //              */

// //             if (communityJoined !== true) {

// //                 return res.status(400).json({

// //                     success: false,

// //                     message:
// //                         "Please join the WhatsApp Community before registering."

// //                 });

// //             }


// //             /*
// //              * Normalize phone
// //              */

// //             const normalizedPhone =
// //                 String(phone)
// //                     .replace(/\D/g, "")
// //                     .slice(-10);


// //             if (
// //                 normalizedPhone.length !== 10
// //             ) {

// //                 return res.status(400).json({

// //                     success: false,

// //                     message:
// //                         "Please enter a valid 10-digit WhatsApp number."

// //                 });

// //             }


// //             /*
// //              * Check duplicate phone
// //              */

// //             const existingLead =
// //                 await Lead.findOne({

// //                     phone:
// //                         normalizedPhone

// //                 });


// //             if (existingLead) {

// //                 return res.status(409).json({

// //                     success: false,

// //                     message:
// //                         "This WhatsApp number is already registered."

// //                 });

// //             }


// //             /*
// //              * Create lead
// //              */

// //             const newLead =
// //                 new Lead({

// //                     name:
// //                         String(name).trim(),

// //                     phone:
// //                         normalizedPhone,

// //                     email:
// //                         String(email)
// //                             .trim()
// //                             .toLowerCase(),

// //                     state:
// //                         String(state).trim(),

// //                     communityJoined:
// //                         true,

// //                     communityJoinDate:
// //                         new Date(),

// //                     zoomEmailSent:
// //                         false,

// //                     zoomReminderSent:
// //                         false

// //                 });


// //             await newLead.save();


// //             /*
// //              * Send registration email
// //              */

// //             const emailSent =
// //                 await sendRegistrationEmail(
// //                     newLead
// //                 );


// //             /*
// //              * Update email status
// //              */

// //             if (emailSent) {

// //                 newLead.zoomEmailSent =
// //                     true;

// //                 await newLead.save();

// //             }


// //             /*
// //              * Response
// //              */

// //             return res.status(201).json({

// //                 success: true,

// //                 message:
// //                     emailSent
// //                         ? "Registration successful. Zoom link has been sent to your email."
// //                         : "Registration successful. Please use the Zoom link below.",

// //                 zoomLink:
// //                     ZOOM_MEETING_LINK,

// //                 whatsappCommunityLink:
// //                     WHATSAPP_COMMUNITY_LINK,

// //                 emailSent

// //             });


// //         } catch (error) {

// //             console.error(
// //                 "❌ Registration Error:",
// //                 error
// //             );


// //             /*
// //              * Duplicate MongoDB key
// //              */

// //             if (
// //                 error.code === 11000
// //             ) {

// //                 return res.status(409).json({

// //                     success: false,

// //                     message:
// //                         "This WhatsApp number is already registered."

// //                 });

// //             }


// //             return res.status(500).json({

// //                 success: false,

// //                 message:
// //                     "Server Error. Please try again."

// //             });

// //         }

// //     }
// // );


// // /*
// // |--------------------------------------------------------------------------
// // | GET /api/leads
// // |--------------------------------------------------------------------------
// // |
// // | Admin / testing endpoint.
// // |
// // */

// // app.get(
// //     "/api/leads",
// //     async (req, res) => {

// //         try {

// //             const leads =
// //                 await Lead
// //                     .find()
// //                     .sort({
// //                         registrationDate: -1
// //                     })
// //                     .lean();


// //             return res.json({

// //                 success: true,

// //                 total:
// //                     leads.length,

// //                 communityJoined:
// //                     leads.filter(
// //                         lead =>
// //                             lead.communityJoined === true
// //                     ).length,

// //                 zoomEmailSent:
// //                     leads.filter(
// //                         lead =>
// //                             lead.zoomEmailSent === true
// //                     ).length,

// //                 zoomReminderSent:
// //                     leads.filter(
// //                         lead =>
// //                             lead.zoomReminderSent === true
// //                     ).length,

// //                 data:
// //                     leads

// //             });


// //         } catch (error) {

// //             console.error(
// //                 "❌ Get Leads Error:",
// //                 error.message
// //             );


// //             return res.status(500).json({

// //                 success: false,

// //                 message:
// //                     error.message

// //             });

// //         }

// //     }
// // );


// // /*
// // |--------------------------------------------------------------------------
// // | REMINDER SYSTEM
// // |--------------------------------------------------------------------------
// // |
// // | Checks every minute.
// // |
// // | Reminder = 30 minutes before webinar.
// // |
// // */

// // async function checkWebinarReminders() {

// //     try {

// //         const now =
// //             Date.now();


// //         for (
// //             const webinarDateString
// //             of WEBINAR_DATES
// //         ) {

// //             const webinarTime =
// //                 new Date(
// //                     webinarDateString
// //                 ).getTime();


// //             const reminderTime =
// //                 webinarTime -
// //                 (30 * 60 * 1000);


// //             /*
// //              * Allow 1 minute window
// //              */

// //             if (
// //                 now >= reminderTime &&
// //                 now < reminderTime + 60000
// //             ) {

// //                 console.log(
// //                     "⏰ Reminder window reached:",
// //                     webinarDateString
// //                 );


// //                 const leads =
// //                     await Lead.find({

// //                         zoomEmailSent:
// //                             true,

// //                         zoomReminderSent:
// //                             false

// //                     });


// //                 console.log(
// //                     `📧 Sending reminders to ${leads.length} users`
// //                 );


// //                 for (
// //                     const lead
// //                     of leads
// //                 ) {

// //                     const sent =
// //                         await sendReminderEmail(
// //                             lead
// //                         );


// //                     if (sent) {

// //                         lead.zoomReminderSent =
// //                             true;

// //                         await lead.save();

// //                     }

// //                 }

// //             }

// //         }

// //     } catch (error) {

// //         console.error(
// //             "❌ Reminder scheduler error:",
// //             error.message
// //         );

// //     }

// // }


// // /*
// // |--------------------------------------------------------------------------
// // | START REMINDER SCHEDULER
// // |--------------------------------------------------------------------------
// // */

// // setInterval(
// //     checkWebinarReminders,
// //     60 * 1000
// // );


// // /*
// //  * Run once when server starts.
// //  */

// // checkWebinarReminders();


// // /*
// // |--------------------------------------------------------------------------
// // | START SERVER
// // |--------------------------------------------------------------------------
// // */

// // app.listen(
// //     PORT,
// //     () => {

// //         console.log(
// //             `🚀 I TECH AI server running on port ${PORT}`
// //         );

// //         console.log(
// //             `🌐 API: http://localhost:${PORT}`
// //         );

// //         console.log(
// //             `📱 WhatsApp Community: ${WHATSAPP_COMMUNITY_LINK}`
// //         );

// //         console.log(
// //             `🎥 Zoom: ${ZOOM_MEETING_LINK}`
// //         );

// //     }
// // );



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();

// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.use(express.json());

// /* =========================================================
//    ENVIRONMENT VARIABLES
// ========================================================= */

// const PORT = process.env.PORT || 5000;

// const MONGO_URI = process.env.MONGO_URI;

// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;

// const ZOOM_MEETING_LINK = process.env.https://meet.google.com/uca-deoe-vnh?hs=151;

// const WHATSAPP_COMMUNITY_LINK =
//   process.env.https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E;


// /* =========================================================
//    BASIC ENV CHECK
// ========================================================= */

// if (!MONGO_URI) {
//   console.error("❌ MONGO_URI is missing in .env");
// }

// if (!EMAIL_USER || !EMAIL_PASS) {
//   console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
// }

// if (!ZOOM_MEETING_LINK) {
//   console.error("❌ ZOOM_MEETING_LINK is missing in .env");
// }

// if (!WHATSAPP_COMMUNITY_LINK) {
//   console.error("❌ WHATSAPP_COMMUNITY_LINK is missing in .env");
// }


// /* =========================================================
//    MONGODB CONNECTION
// ========================================================= */

// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//   })
//   .catch((error) => {
//     console.error("❌ MongoDB connection error:");
//     console.error(error.message);
//   });


// /* =========================================================
//    LEAD SCHEMA
// ========================================================= */

// const leadSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },

//     state: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     communityJoined: {
//       type: Boolean,
//       default: false,
//     },

//     communityJoinDate: {
//       type: Date,
//       default: null,
//     },

//     zoomEmailSent: {
//       type: Boolean,
//       default: false,
//     },

//     zoomReminderSent: {
//       type: Boolean,
//       default: false,
//     },

//     registrationDate: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Lead = mongoose.model("Lead", leadSchema);


// /* =========================================================
//    EMAIL TRANSPORTER
// ========================================================= */

// const transporter = nodemailer.createTransport({
//   service: "gmail",

//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });


// /* =========================================================
//    CHECK EMAIL CONFIGURATION
// ========================================================= */

// async function verifyEmailConfiguration() {
//   if (!EMAIL_USER || !EMAIL_PASS) {
//     console.log("⚠️ Email configuration not available");
//     return;
//   }

//   try {
//     await transporter.verify();

//     console.log("✅ Email service ready");
//   } catch (error) {
//     console.error("❌ Email service error:");
//     console.error(error.message);
//   }
// }


// /* =========================================================
//    REGISTRATION EMAIL
// ========================================================= */

// async function sendRegistrationEmail(lead) {
//   const mailOptions = {
//     from: `"I TECH AI" <${EMAIL_USER}>`,

//     to: lead.email,

//     subject: "🎉 Your Webinar Registration is Confirmed",

//     html: `
//       <!DOCTYPE html>

//       <html>

//       <head>

//         <meta charset="UTF-8">

//         <meta name="viewport"
//               content="width=device-width, initial-scale=1.0">

//       </head>

//       <body
//         style="
//           margin:0;
//           padding:0;
//           background:#f5f5f5;
//           font-family:Arial,Helvetica,sans-serif;
//         "
//       >

//         <div
//           style="
//             max-width:600px;
//             margin:30px auto;
//             background:white;
//             border-radius:12px;
//             overflow:hidden;
//             box-shadow:0 5px 20px rgba(0,0,0,0.08);
//           "
//         >

//           <div
//             style="
//               background:#f97316;
//               color:white;
//               padding:30px 20px;
//               text-align:center;
//             "
//           >

//             <h1 style="margin:0;">
//               🎉 Registration Confirmed
//             </h1>

//             <p style="margin:10px 0 0;">
//               I TECH AI Webinar
//             </p>

//           </div>


//           <div style="padding:30px 25px;">

//             <p>
//               Hello <strong>${lead.name}</strong>,
//             </p>

//             <p>
//               Thank you for registering for the I TECH AI webinar.
//               Your registration has been successfully completed.
//             </p>


//             <div
//               style="
//                 background:#fff7ed;
//                 border-left:4px solid #f97316;
//                 padding:18px;
//                 margin:20px 0;
//               "
//             >

//               <h3 style="margin-top:0;">
//                 📅 Webinar Schedule
//               </h3>

//               <p>
//                 <strong>8th, 9th & 10th September</strong>
//               </p>

//               <p>
//                 🕗 Time: <strong>8:00 PM – 9:00 PM</strong>
//               </p>

//             </div>


//             <div style="text-align:center;margin:25px 0;">

//               <a
//                 href="${https:meet.google.com/uca-deoe-vnh?hs=151}"
//                 target="_blank"
//                 style="
//                   display:inline-block;
//                   background:#f97316;
//                   color:white;
//                   text-decoration:none;
//                   padding:14px 25px;
//                   border-radius:8px;
//                   font-weight:bold;
//                 "
//               >
//                 🎥 Join Zoom Webinar
//               </a>

//             </div>


//             <div style="text-align:center;margin:25px 0;">

//               <a
//                 href="${WHATSAPP_COMMUNITY_LINK}"
//                 target="_blank"
//                 style="
//                   display:inline-block;
//                   background:#16a34a;
//                   color:white;
//                   text-decoration:none;
//                   padding:14px 25px;
//                   border-radius:8px;
//                   font-weight:bold;
//                 "
//               >
//                 💬 Join WhatsApp Community
//               </a>

//             </div>


//             <p style="margin-top:30px;">
//               Please save this email so that you can easily access
//               the webinar link.
//             </p>


//             <p>
//               Regards,<br>
//               <strong>I TECH AI Team</strong>
//             </p>

//           </div>


//           <div
//             style="
//               background:#fafafa;
//               padding:20px;
//               text-align:center;
//               color:#777;
//               font-size:13px;
//             "
//           >

//             © ${new Date().getFullYear()} I TECH AI

//           </div>

//         </div>

//       </body>

//       </html>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// }


// /* =========================================================
//    WEBINAR DATES
// ========================================================= */

// const webinarDates = [
//   "2026-09-08T20:00:00+05:30",
//   "2026-09-09T20:00:00+05:30",
//   "2026-09-10T20:00:00+05:30",
// ];


// /* =========================================================
//    REMINDER EMAIL
// ========================================================= */

// async function sendReminderEmail(lead) {
//   const mailOptions = {
//     from: `"I TECH AI" <${EMAIL_USER}>`,

//     to: lead.email,

//     subject: "⏰ Webinar Starts in 30 Minutes",

//     html: `
//       <!DOCTYPE html>

//       <html>

//       <body
//         style="
//           margin:0;
//           padding:0;
//           background:#f5f5f5;
//           font-family:Arial,Helvetica,sans-serif;
//         "
//       >

//         <div
//           style="
//             max-width:600px;
//             margin:30px auto;
//             background:white;
//             border-radius:12px;
//             overflow:hidden;
//           "
//         >

//           <div
//             style="
//               background:#f97316;
//               color:white;
//               padding:25px;
//               text-align:center;
//             "
//           >

//             <h1 style="margin:0;">
//               ⏰ Webinar Reminder
//             </h1>

//           </div>


//           <div style="padding:30px;">

//             <p>
//               Hello <strong>${lead.name}</strong>,
//             </p>

//             <p>
//               Your I TECH AI webinar is starting in approximately
//               <strong>30 minutes</strong>.
//             </p>


//             <div
//               style="
//                 background:#fff7ed;
//                 padding:18px;
//                 border-radius:8px;
//                 margin:20px 0;
//               "
//             >

//               <p>
//                 📅 <strong>8th, 9th & 10th September</strong>
//               </p>

//               <p>
//                 🕗 <strong>8:00 PM – 9:00 PM</strong>
//               </p>

//             </div>


//             <div style="text-align:center;margin:25px 0;">

//               <a
//                 href="${ZOOM_MEETING_LINK}"
//                 target="_blank"
//                 style="
//                   display:inline-block;
//                   background:#f97316;
//                   color:white;
//                   text-decoration:none;
//                   padding:15px 28px;
//                   border-radius:8px;
//                   font-weight:bold;
//                 "
//               >
//                 🎥 Join Webinar Now
//               </a>

//             </div>


//             <p>
//               See you inside the webinar!
//             </p>


//             <p>
//               Regards,<br>
//               <strong>I TECH AI Team</strong>
//             </p>

//           </div>

//         </div>

//       </body>

//       </html>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// }


// /* =========================================================
//    HEALTH CHECK
// ========================================================= */

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "I TECH AI Webinar Backend is running 🚀",
//   });
// });


// /* =========================================================
//    CREATE LEAD
// ========================================================= */

// app.post("/api/leads", async (req, res) => {
//   try {
//     const {
//       name,
//       phone,
//       email,
//       state,
//       communityJoined,
//     } = req.body;


//     /* -----------------------------
//        VALIDATION
//     ----------------------------- */

//     if (!name || !phone || !email || !state) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, phone, email and state are required.",
//       });
//     }


//     if (communityJoined !== true) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Please join the WhatsApp Community before submitting the form.",
//       });
//     }


//     /* -----------------------------
//        NORMALIZE PHONE
//     ----------------------------- */

//     const normalizedPhone = String(phone)
//       .replace(/\D/g, "")
//       .slice(-10);


//     if (normalizedPhone.length !== 10) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid 10-digit WhatsApp number.",
//       });
//     }


//     /* -----------------------------
//        CHECK DUPLICATE
//     ----------------------------- */

//     const existingLead = await Lead.findOne({
//       phone: normalizedPhone,
//     });


//     if (existingLead) {
//       return res.status(409).json({
//         success: false,
//         message:
//           "This WhatsApp number is already registered for the webinar.",
//         zoomLink: ZOOM_MEETING_LINK,
//         whatsappCommunityLink: WHATSAPP_COMMUNITY_LINK,
//       });
//     }


//     /* -----------------------------
//        CREATE LEAD
//     ----------------------------- */

//     const lead = new Lead({
//       name: String(name).trim(),

//       phone: normalizedPhone,

//       email: String(email).trim().toLowerCase(),

//       state: String(state).trim(),

//       communityJoined: true,

//       communityJoinDate: new Date(),

//       registrationDate: new Date(),
//     });


//     await lead.save();


//     /* -----------------------------
//        SEND EMAIL
//     ----------------------------- */

//     let emailSent = false;


//     try {
//       await sendRegistrationEmail(lead);

//       lead.zoomEmailSent = true;

//       await lead.save();

//       emailSent = true;

//       console.log(
//         `📧 Registration email sent to ${lead.email}`
//       );

//     } catch (emailError) {

//       console.error(
//         "❌ Registration email failed:",
//         emailError.message
//       );

//     }


//     /* -----------------------------
//        RESPONSE
//     ----------------------------- */

//     return res.status(201).json({
//       success: true,

//       message:
//         "Registration successful! Zoom and WhatsApp links are ready.",

//       zoomLink: ZOOM_MEETING_LINK,

//       whatsappCommunityLink:
//         WHATSAPP_COMMUNITY_LINK,

//       emailSent,
//     });

//   } catch (error) {

//     console.error("❌ Lead creation error:");
//     console.error(error);


//     return res.status(500).json({
//       success: false,
//       message: "Server error. Please try again later.",
//     });
//   }
// });


// /* =========================================================
//    GET ALL LEADS
// ========================================================= */

// app.get("/api/leads", async (req, res) => {
//   try {

//     const leads = await Lead.find()
//       .sort({
//         registrationDate: -1,
//       })
//       .lean();


//     const total = leads.length;

//     const communityJoined = leads.filter(
//       (lead) => lead.communityJoined === true
//     ).length;

//     const zoomEmailSent = leads.filter(
//       (lead) => lead.zoomEmailSent === true
//     ).length;

//     const zoomReminderSent = leads.filter(
//       (lead) => lead.zoomReminderSent === true
//     ).length;


//     return res.json({
//       success: true,

//       total,

//       communityJoined,

//       zoomEmailSent,

//       zoomReminderSent,

//       data: leads,
//     });

//   } catch (error) {

//     console.error(
//       "❌ Error fetching leads:",
//       error.message
//     );

//     return res.status(500).json({
//       success: false,
//       message: "Unable to fetch leads.",
//     });
//   }
// });


// /* =========================================================
//    GET SINGLE LEAD
// ========================================================= */

// app.get("/api/leads/:phone", async (req, res) => {
//   try {

//     const normalizedPhone = String(
//       req.params.phone
//     )
//       .replace(/\D/g, "")
//       .slice(-10);


//     const lead = await Lead.findOne({
//       phone: normalizedPhone,
//     }).lean();


//     if (!lead) {
//       return res.status(404).json({
//         success: false,
//         message: "Lead not found.",
//       });
//     }


//     return res.json({
//       success: true,
//       data: lead,
//     });

//   } catch (error) {

//     console.error(
//       "❌ Error fetching lead:",
//       error.message
//     );

//     return res.status(500).json({
//       success: false,
//       message: "Server error.",
//     });
//   }
// });


// /* =========================================================
//    MANUAL TEST EMAIL
// ========================================================= */

// app.post("/api/test-email", async (req, res) => {
//   try {

//     const { email } = req.body;


//     if (!email) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required.",
//       });
//     }


//     const testLead = {
//       name: "Test User",
//       email,
//     };


//     await sendRegistrationEmail(testLead);


//     return res.json({
//       success: true,
//       message: "Test email sent successfully.",
//     });

//   } catch (error) {

//     console.error(
//       "❌ Test email failed:",
//       error.message
//     );

//     return res.status(500).json({
//       success: false,
//       message: "Test email failed.",
//       error: error.message,
//     });
//   }
// });


// /* =========================================================
//    REMINDER SCHEDULER
// ========================================================= */

// async function checkAndSendReminders() {

//   try {

//     const now = new Date();


//     for (const webinarDateString of webinarDates) {

//       const webinarDate =
//         new Date(webinarDateString);


//       const reminderTime =
//         new Date(
//           webinarDate.getTime() -
//           30 * 60 * 1000
//         );


//       const currentDifference =
//         Math.abs(
//           now.getTime() -
//           reminderTime.getTime()
//         );


//       /*
//        * Run reminder when current time is within
//        * approximately 1 minute of reminder time.
//        */

//       if (currentDifference <= 60 * 1000) {

//         console.log(
//           `⏰ Reminder window reached for ${webinarDateString}`
//         );


//         const leads = await Lead.find({
//           zoomEmailSent: true,
//         });


//         for (const lead of leads) {

//           try {

//             await sendReminderEmail(lead);


//             lead.zoomReminderSent = true;

//             await lead.save();


//             console.log(
//               `📧 Reminder sent to ${lead.email}`
//             );

//           } catch (error) {

//             console.error(
//               `❌ Reminder failed for ${lead.email}:`,
//               error.message
//             );

//           }

//         }

//       }

//     }

//   } catch (error) {

//     console.error(
//       "❌ Reminder scheduler error:",
//       error.message
//     );
//   }
// }


// /* =========================================================
//    START REMINDER CHECK
// ========================================================= */

// setInterval(
//   checkAndSendReminders,
//   60 * 1000
// );


// /* =========================================================
//    START SERVER
// ========================================================= */

// app.listen(PORT, () => {

//   console.log("");
//   console.log("======================================");
//   console.log("🚀 I TECH AI WEBINAR BACKEND");
//   console.log("======================================");
//   console.log(`🌐 Server: http://localhost:${PORT}`);
//   console.log(`📋 Leads:  http://localhost:${PORT}/api/leads`);
//   console.log("📧 Email system: enabled");
//   console.log("🎥 Zoom link: configured from .env");
//   console.log("💬 WhatsApp link: configured from .env");
//   console.log("⏰ Reminder scheduler: running");
//   console.log("======================================");
//   console.log("");

//   verifyEmailConfiguration();

// });



const express = require("express");
const path= require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

/* =========================================================
   CONFIGURATION
========================================================= */

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;


/* =========================================================
   WEBINAR LINKS
========================================================= */

/*
 * Google Meet link
 */
const WEBINAR_MEETING_LINK =
  "https://meet.google.com/uca-deoe-vnh?hs=151";


/*
 * WhatsApp Channel link
 */
const WHATSAPP_COMMUNITY_LINK =
  "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";


/* =========================================================
   BASIC ENV CHECK
========================================================= */

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env");
}

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
}


/* =========================================================
   MONGODB CONNECTION
========================================================= */

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:");
    console.error(error.message);
  });


/* =========================================================
   LEAD SCHEMA
========================================================= */

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    communityJoined: {
      type: Boolean,
      default: false,
    },

    communityJoinDate: {
      type: Date,
      default: null,
    },

    zoomEmailSent: {
      type: Boolean,
      default: false,
    },

    zoomReminderSent: {
      type: Boolean,
      default: false,
    },

    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);


/* =========================================================
   EMAIL TRANSPORTER
========================================================= */

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});


/* =========================================================
   VERIFY EMAIL
========================================================= */

async function verifyEmailConfiguration() {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.log("⚠️ Email configuration not available");
    return;
  }

  try {
    await transporter.verify();

    console.log("✅ Email service ready");
  } catch (error) {
    console.error("❌ Email service error:");
    console.error(error.message);
  }
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   REGISTRATION EMAIL
========================================================= */

async function sendRegistrationEmail(lead) {

  const mailOptions = {
    from: `"I TECH AI" <${EMAIL_USER}>`,

    to: lead.email,

    subject:
      "🎉 Your Webinar Registration is Confirmed | I TECH AI",

    html: `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

</head>


<body
  style="
    margin:0;
    padding:0;
    background:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
  "
>


<div
  style="
    max-width:600px;
    margin:30px auto;
    background:white;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 5px 20px rgba(0,0,0,0.08);
  "
>


<!-- HEADER -->

<div
  style="
    background:#f97316;
    color:white;
    padding:30px 20px;
    text-align:center;
  "
>

<h1 style="margin:0;">
  🎉 Registration Confirmed
</h1>

<p style="margin:10px 0 0;">
  I TECH AI Webinar
</p>

</div>


<!-- CONTENT -->

<div style="padding:30px 25px;">

<p>
  Hello <strong>${escapeHtml(lead.name)}</strong> 👋
</p>


<p>
  Thank you for registering for the I TECH AI webinar.
  Your registration has been successfully completed.
</p>


<!-- WEBINAR DETAILS -->

<div
  style="
    background:#fff7ed;
    border-left:4px solid #f97316;
    padding:18px;
    margin:20px 0;
  "
>

<h3 style="margin-top:0;">
  📅 Webinar Schedule
</h3>

<p>
  <strong>8th, 9th & 10th September 2026</strong>
</p>

<p>
  🕗 Time:
  <strong>8:00 PM – 9:00 PM</strong>
</p>

<p>
  🎤 Speaker:
  <strong>MR Deepak sir</strong>
</p>

<p>
  💻 Platform:
  <strong>Google Meet</strong>
</p>

</div>


<!-- GOOGLE MEET BUTTON -->

<div
  style="
    text-align:center;
    margin:25px 0;
  "
>

<a
  href="${WEBINAR_MEETING_LINK}"
  target="_blank"
  style="
    display:inline-block;
    background:#f97316;
    color:white;
    text-decoration:none;
    padding:14px 25px;
    border-radius:8px;
    font-weight:bold;
  "
>

🎥 JOIN GOOGLE MEET

</a>

</div>


<!-- WHATSAPP BUTTON -->

<div
  style="
    text-align:center;
    margin:25px 0;
  "
>

<a
  href="${WHATSAPP_COMMUNITY_LINK}"
  target="_blank"
  style="
    display:inline-block;
    background:#16a34a;
    color:white;
    text-decoration:none;
    padding:14px 25px;
    border-radius:8px;
    font-weight:bold;
  "
>

💬 JOIN WHATSAPP CHANNEL

</a>

</div>


<p style="margin-top:30px;">

Please save this email so that you can easily access
the webinar and WhatsApp links.

</p>


<p>

Regards,<br>

<strong>I TECH AI Team</strong>

</p>

</div>


<!-- FOOTER -->

<div
  style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#777;
    font-size:13px;
  "
>

© ${new Date().getFullYear()} I TECH AI

</div>


</div>

</body>

</html>
`,
  };

  await transporter.sendMail(mailOptions);
}


/* =========================================================
   WEBINAR DATES
========================================================= */

const webinarDates = [

  "2026-09-08T20:00:00+05:30",

  "2026-09-09T20:00:00+05:30",

  "2026-09-10T20:00:00+05:30",

];


/* =========================================================
   REMINDER EMAIL
========================================================= */

async function sendReminderEmail(lead) {

  const mailOptions = {

    from:
      `"I TECH AI" <${EMAIL_USER}>`,

    to:
      lead.email,

    subject:
      "⏰ Webinar Starts in 30 Minutes | I TECH AI",

    html: `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

</head>


<body
  style="
    margin:0;
    padding:0;
    background:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
  "
>


<div
  style="
    max-width:600px;
    margin:30px auto;
    background:white;
    border-radius:12px;
    overflow:hidden;
  "
>


<!-- HEADER -->

<div
  style="
    background:#f97316;
    color:white;
    padding:25px;
    text-align:center;
  "
>

<h1 style="margin:0;">
  ⏰ Webinar Reminder
</h1>

<p style="margin:10px 0 0;">
  I TECH AI
</p>

</div>


<!-- CONTENT -->

<div style="padding:30px;">

<p>
  Hello <strong>${escapeHtml(lead.name)}</strong> 👋
</p>


<p>

Your I TECH AI webinar is starting in approximately
<strong>30 minutes</strong>.

</p>


<!-- DETAILS -->

<div
  style="
    background:#fff7ed;
    padding:18px;
    border-radius:8px;
    margin:20px 0;
  "
>

<p>

📅
<strong>
8th, 9th & 10th September 2026
</strong>

</p>


<p>

🕗
<strong>
8:00 PM – 9:00 PM
</strong>

</p>


<p>

💻
<strong>
Google Meet
</strong>

</p>

</div>


<!-- MEET BUTTON -->

<div
  style="
    text-align:center;
    margin:25px 0;
  "
>

<a
  href="${WEBINAR_MEETING_LINK}"
  target="_blank"
  style="
    display:inline-block;
    background:#f97316;
    color:white;
    text-decoration:none;
    padding:15px 28px;
    border-radius:8px;
    font-weight:bold;
  "
>

🎥 JOIN GOOGLE MEET

</a>

</div>


<!-- WHATSAPP BUTTON -->

<div
  style="
    text-align:center;
    margin:25px 0;
  "
>

<a
  href="${WHATSAPP_COMMUNITY_LINK}"
  target="_blank"
  style="
    display:inline-block;
    background:#16a34a;
    color:white;
    text-decoration:none;
    padding:15px 28px;
    border-radius:8px;
    font-weight:bold;
  "
>

💬 JOIN WHATSAPP CHANNEL

</a>

</div>


<p>

Please join a few minutes before the session starts.

</p>


<p>

See you inside the webinar! 🎓

</p>


<p>

Regards,<br>

<strong>I TECH AI Team</strong>

</p>

</div>


<!-- FOOTER -->

<div
  style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#777;
    font-size:13px;
  "
>

© ${new Date().getFullYear()} I TECH AI

</div>


</div>

</body>

</html>
`,
  };


  await transporter.sendMail(mailOptions);
}


/* =========================================================
   HEALTH CHECK
========================================================= */

// app.get("/", (req, res) => {

//   res.json({

//     success: true,

//     message:
//       "I TECH AI Webinar Backend is running 🚀",

//     webinarDates,

//     webinarMeetingLink:
//       WEBINAR_MEETING_LINK,

//     whatsappCommunityLink:
//       WHATSAPP_COMMUNITY_LINK,

//   });

// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index1.html"));
});

/* =========================================================
   CREATE LEAD
========================================================= */

app.post("/api/leads", async (req, res) => {

  try {

    const {
      name,
      phone,
      email,
      state,
      communityJoined,
    } = req.body;


    /* VALIDATION */

    if (
      !name ||
      !phone ||
      !email ||
      !state
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Name, phone, email and state are required.",

      });

    }


    /* COMMUNITY VALIDATION */

    if (communityJoined !== true) {

      return res.status(400).json({

        success: false,

        message:
          "Please join the WhatsApp Channel before submitting the form.",

        whatsappCommunityLink:
          WHATSAPP_COMMUNITY_LINK,

      });

    }


    /* NORMALIZE PHONE */

    const normalizedPhone =
      String(phone)
        .replace(/\D/g, "")
        .slice(-10);


    if (
      normalizedPhone.length !== 10
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Please enter a valid 10-digit WhatsApp number.",

      });

    }


    /* CHECK DUPLICATE */

    const existingLead =
      await Lead.findOne({
        phone: normalizedPhone,
      });


    if (existingLead) {

      return res.status(409).json({

        success: false,

        message:
          "This WhatsApp number is already registered for the webinar.",

        webinarMeetingLink:
          WEBINAR_MEETING_LINK,

        whatsappCommunityLink:
          WHATSAPP_COMMUNITY_LINK,

      });

    }


    /* CREATE LEAD */

    const lead =
      new Lead({

        name:
          String(name).trim(),

        phone:
          normalizedPhone,

        email:
          String(email)
            .trim()
            .toLowerCase(),

        state:
          String(state).trim(),

        communityJoined:
          true,

        communityJoinDate:
          new Date(),

        registrationDate:
          new Date(),

      });


    await lead.save();


    /* SEND REGISTRATION EMAIL */

    let emailSent = false;


    try {

      await sendRegistrationEmail(
        lead
      );


      lead.zoomEmailSent =
        true;


      await lead.save();


      emailSent = true;


      console.log(
        `📧 Registration email sent to ${lead.email}`
      );


    } catch (emailError) {

      console.error(
        "❌ Registration email failed:",
        emailError.message
      );

    }


    /* RESPONSE */

    return res.status(201).json({

      success: true,

      message:
        emailSent
          ? "Registration successful! Webinar and WhatsApp links have been sent to your email."
          : "Registration successful! Webinar and WhatsApp links are ready.",

      webinarMeetingLink:
        WEBINAR_MEETING_LINK,

      whatsappCommunityLink:
        WHATSAPP_COMMUNITY_LINK,

      emailSent,

    });


  } catch (error) {

    console.error(
      "❌ Lead creation error:"
    );

    console.error(error);


    if (
      error.code === 11000
    ) {

      return res.status(409).json({

        success: false,

        message:
          "This WhatsApp number is already registered.",

        webinarMeetingLink:
          WEBINAR_MEETING_LINK,

        whatsappCommunityLink:
          WHATSAPP_COMMUNITY_LINK,

      });

    }


    return res.status(500).json({

      success: false,

      message:
        "Server error. Please try again later.",

    });

  }

});


/* =========================================================
   GET ALL LEADS
========================================================= */

app.get("/api/leads", async (req, res) => {

  try {

    const leads =
      await Lead
        .find()
        .sort({
          registrationDate: -1,
        })
        .lean();


    const total =
      leads.length;


    const communityJoined =
      leads.filter(
        (lead) =>
          lead.communityJoined === true
      ).length;


    const zoomEmailSent =
      leads.filter(
        (lead) =>
          lead.zoomEmailSent === true
      ).length;


    const zoomReminderSent =
      leads.filter(
        (lead) =>
          lead.zoomReminderSent === true
      ).length;


    return res.json({

      success: true,

      total,

      communityJoined,

      zoomEmailSent,

      zoomReminderSent,

      webinarMeetingLink:
        WEBINAR_MEETING_LINK,

      whatsappCommunityLink:
        WHATSAPP_COMMUNITY_LINK,

      data:
        leads,

    });


  } catch (error) {

    console.error(
      "❌ Error fetching leads:",
      error.message
    );


    return res.status(500).json({

      success: false,

      message:
        "Unable to fetch leads.",

    });

  }

});


/* =========================================================
   GET SINGLE LEAD
========================================================= */

app.get(
  "/api/leads/:phone",
  async (req, res) => {

    try {

      const normalizedPhone =
        String(req.params.phone)
          .replace(/\D/g, "")
          .slice(-10);


      const lead =
        await Lead
          .findOne({
            phone:
              normalizedPhone,
          })
          .lean();


      if (!lead) {

        return res.status(404).json({

          success: false,

          message:
            "Lead not found.",

        });

      }


      return res.json({

        success: true,

        webinarMeetingLink:
          WEBINAR_MEETING_LINK,

        whatsappCommunityLink:
          WHATSAPP_COMMUNITY_LINK,

        data:
          lead,

      });


    } catch (error) {

      console.error(
        "❌ Error fetching lead:",
        error.message
      );


      return res.status(500).json({

        success: false,

        message:
          "Server error.",

      });

    }

  }
);


/* =========================================================
   TEST EMAIL
========================================================= */

app.post(
  "/api/test-email",
  async (req, res) => {

    try {

      const {
        email
      } = req.body;


      if (!email) {

        return res.status(400).json({

          success: false,

          message:
            "Email is required.",

        });

      }


      const testLead = {

        name:
          "Test User",

        email,

      };


      await sendRegistrationEmail(
        testLead
      );


      return res.json({

        success: true,

        message:
          "Test email sent successfully.",

      });


    } catch (error) {

      console.error(
        "❌ Test email failed:",
        error.message
      );


      return res.status(500).json({

        success: false,

        message:
          "Test email failed.",

        error:
          error.message,

      });

    }

  }
);


/* =========================================================
   REMINDER SCHEDULER
========================================================= */

async function checkAndSendReminders() {

  try {

    const now =
      new Date();


    for (
      const webinarDateString
      of webinarDates
    ) {

      const webinarDate =
        new Date(
          webinarDateString
        );


      const reminderTime =
        new Date(
          webinarDate.getTime() -
          30 * 60 * 1000
        );


      const currentDifference =
        Math.abs(
          now.getTime() -
          reminderTime.getTime()
        );


      /*
       * Reminder window:
       * 1 minute
       */

      if (
        currentDifference <=
        60 * 1000
      ) {

        console.log(
          `⏰ Reminder window reached for ${webinarDateString}`
        );


        /*
         * IMPORTANT:
         * Only send reminder to users
         * who have not received it yet.
         */

        const leads =
          await Lead.find({

            zoomEmailSent:
              true,

            zoomReminderSent:
              false,

          });


        console.log(
          `📧 Sending reminders to ${leads.length} users`
        );


        for (
          const lead
          of leads
        ) {

          try {

            await sendReminderEmail(
              lead
            );


            lead.zoomReminderSent =
              true;


            await lead.save();


            console.log(
              `📧 Reminder sent to ${lead.email}`
            );


          } catch (error) {

            console.error(
              `❌ Reminder failed for ${lead.email}:`,
              error.message
            );

          }

        }

      }

    }

  } catch (error) {

    console.error(
      "❌ Reminder scheduler error:",
      error.message
    );

  }

}


/* =========================================================
   START REMINDER CHECK
========================================================= */

setInterval(
  checkAndSendReminders,
  60 * 1000
);


/* =========================================================
   START SERVER
========================================================= */

app.listen(
  PORT,
  () => {

    console.log("");

    console.log(
      "======================================"
    );

    console.log(
      "🚀 I TECH AI WEBINAR BACKEND"
    );

    console.log(
      "======================================"
    );

    console.log(
      `🌐 Server: http://localhost:${PORT}`
    );

    console.log(
      `📋 Leads: http://localhost:${PORT}/api/leads`
    );

    console.log(
      "📧 Email system: enabled"
    );

    console.log(
      `🎥 Google Meet: ${WEBINAR_MEETING_LINK}`
    );

    console.log(
      `💬 WhatsApp Channel: ${WHATSAPP_COMMUNITY_LINK}`
    );

    console.log(
      "⏰ Reminder scheduler: running"
    );

    console.log(
      "======================================"
    );

    console.log("");

    verifyEmailConfiguration();

  }
);
// document.addEventListener("DOMContentLoaded", function () {

//     const faqQuestions = document.querySelectorAll(".faq-question");

//     faqQuestions.forEach(function (question) {

//         question.addEventListener("click", function () {

//             const currentItem = this.closest(".faq-item");

//             document.querySelectorAll(".faq-item").forEach(function (item) {

//                 if (item !== currentItem) {
//                     item.classList.remove("active");
//                 }

//             });

//             currentItem.classList.toggle("active");

//         });

//     });

// });