// // // // // // // // const express = require('express');
// // // // // // // // const mongoose = require('mongoose');
// // // // // // // // const cors = require('cors');

// // // // // // // // const app =express();
// // // // // // // // app.use(express.json());
// // // // // // // // app.use(cors());

// // // // // // // // // Aapka MongoDB Connection String aur Database Name ('landing page')
// // // // // // // // const MONGO_URI = "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // // // mongoose.connect(MONGO_URI)
// // // // // // // //   .then(() => console.log('MongoDB Connected Successfully to Database: landing page'))
// // // // // // // //   .catch(err => console.error('MongoDB Connection Error:', err));

// // // // // // // // // Mongoose Schema aur Model
// // // // // // // // const leadSchema = new mongoose.Schema({
// // // // // // // //     name: { type: String, required: true },
// // // // // // // //     phone: { type: String, required: true },
// // // // // // // //     date: { type: Date, default: Date.now }
// // // // // // // // });

// // // // // // // // const Lead = mongoose.model('Lead', leadSchema);

// // // // // // // // // API Route for Form Submission
// // // // // // // // app.post('/api/leads', async (req, res) => {
// // // // // // // //     try {
// // // // // // // //         const { name, phone } = req.body;
// // // // // // // //         const newLead = new Lead({ name, phone });
// // // // // // // //         await newLead.save();
// // // // // // // //         res.status(201).json({ success: true, message: 'Data saved successfully' });
// // // // // // // //     } catch (error) {
// // // // // // // //         console.error(error);
// // // // // // // //         res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // // //     }
// // // // // // // // });

// // // // // // // // const PORT = 5000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //     console.log(`Server is running on port ${PORT}`);
// // // // // // // // });


    
        
        
// // // // // // //         const express = require('express');
// // // // // // //         const mongoose = require('mongoose');
// // // // // // //         const cors = require('cors');
// // // // // // //         require('dotenv').config();

// // // // // // //         const app = express();
// // // // // // //         app.use(express.json());
// // // // // // //         app.use(cors());

// // // // // // //         // MongoDB Connection String (from .env)
// // // // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // //         mongoose.connect(MONGO_URI)
// // // // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // // // //         // Schema & Model (with email & state)
// // // // // // //         const leadSchema = new mongoose.Schema({
// // // // // // //             name: { type: String, required: true },
// // // // // // //             phone: { type: String, required: true },
// // // // // // //             email: { type: String, required: true },
// // // // // // //             state: { type: String, required: true },
// // // // // // //             date: { type: Date, default: Date.now }
// // // // // // //         });

// // // // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // // // //         // API Route
// // // // // // //         app.post('/api/leads', async (req, res) => {
// // // // // // //             try {
// // // // // // //                 const { name, phone, email, state } = req.body;
// // // // // // //                 if (!name || !phone || !email || !state) {
// // // // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // // // //                 }
// // // // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // // // //                 await newLead.save();
// // // // // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // // // // //             } catch (error) {
// // // // // // //                 console.error(error);
// // // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // //             }
// // // // // // //         });

// // // // // // //         const PORT = process.env.PORT || 5000;
// // // // // // //         app.listen(PORT, () => {
// // // // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // // // //         });

    


 
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

     
    
// // // // //  const express = require('express');
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

// // // //         const express = require('express');
// // // //         const mongoose = require('mongoose');
// // // //         const cors = require('cors');
// // // //         require('dotenv').config();

// // // //         const app = express();
// // // //         app.use(express.json());
// // // //         app.use(cors());

// // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // //         mongoose.connect(MONGO_URI)
// // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // //         // Schema with payment status
// // // //         const leadSchema = new mongoose.Schema({
// // // //             name: { type: String, required: true },
// // // //             phone: { type: String, required: true, unique: true },
// // // //             email: { type: String, required: true },
// // // //             state: { type: String, required: true },
// // // //             paymentStatus: { type: String, default: 'pending' }, // pending, completed
// // // //             paymentDate: { type: Date },
// // // //             date: { type: Date, default: Date.now }
// // // //         });

// // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // //         // POST - Save lead
// // // //         app.post('/api/leads', async (req, res) => {
// // // //             try {
// // // //                 const { name, phone, email, state } = req.body;
// // // //                 if (!name || !phone || !email || !state) {
// // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // //                 }
                
// // // //                 // Check if lead already exists
// // // //                 let lead = await Lead.findOne({ phone });
// // // //                 if (lead) {
// // // //                     return res.status(400).json({ success: false, message: 'This number is already registered' });
// // // //                 }
                
// // // //                 const newLead = new Lead({ name, phone, email, state });
// // // //                 await newLead.save();
// // // //                 res.status(201).json({ success: true, message: 'Lead saved', data: newLead });
// // // //             } catch (error) {
// // // //                 console.error(error);
// // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // //             }
// // // //         });

// // // //         // PUT - Update payment status
// // // //         app.put('/api/leads/payment', async (req, res) => {
// // // //             try {
// // // //                 const { phone, paymentStatus } = req.body;
// // // //                 if (!phone) {
// // // //                     return res.status(400).json({ success: false, message: 'Phone number required' });
// // // //                 }
                
// // // //                 const lead = await Lead.findOne({ phone });
// // // //                 if (!lead) {
// // // //                     return res.status(404).json({ success: false, message: 'Lead not found' });
// // // //                 }
                
// // // //                 lead.paymentStatus = paymentStatus || 'completed';
// // // //                 lead.paymentDate = new Date();
// // // //                 await lead.save();
                
// // // //                 res.json({ success: true, message: 'Payment status updated', data: lead });
// // // //             } catch (error) {
// // // //                 console.error(error);
// // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // //             }
// // // //         });

// // // //         // POST - Save payment to Google Sheet (via webhook)
// // // //         app.post('/api/leads/payment-sheet', async (req, res) => {
// // // //             try {
// // // //                 const { name, phone, email, state, paymentStatus, paymentDate } = req.body;
                
// // // //                 // Here you can integrate with Google Sheets API
// // // //                 // For now, we'll just log and save to MongoDB
// // // //                 console.log('📊 Payment recorded for:', { name, phone, email, state, paymentStatus, paymentDate });
                
// // // //                 // You can add Google Sheets integration here
// // // //                 // const sheetUrl = 'YOUR_GOOGLE_SHEET_WEBHOOK_URL';
// // // //                 // await fetch(sheetUrl, { method: 'POST', body: JSON.stringify(req.body) });
                
// // // //                 res.json({ success: true, message: 'Payment recorded successfully' });
// // // //             } catch (error) {
// // // //                 console.error(error);
// // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // //             }
// // // //         });

// // // //         // GET - Get all leads with payment status (for admin)
// // // //         app.get('/api/leads', async (req, res) => {
// // // //             try {
// // // //                 const leads = await Lead.find().sort({ date: -1 });
// // // //                 const total = leads.length;
// // // //                 const paid = leads.filter(l => l.paymentStatus === 'completed').length;
// // // //                 const pending = total - paid;
                
// // // //                 res.json({ 
// // // //                     success: true, 
// // // //                     total,
// // // //                     paid,
// // // //                     pending,
// // // //                     data: leads 
// // // //                 });
// // // //             } catch (error) {
// // // //                 // res.status(500).json({ success: false, message: error.message });
// // // //             }
// // // //         });

// // // //         const PORT = process.env.PORT || 5000;
// // // //         app.listen(PORT, () => {
// // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // //         });
    

// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");
// // // const nodemailer = require("nodemailer");
// // // require("dotenv").config();

// // // const app = express();

// // // app.use(cors());
// // // app.use(express.json());


// // // /*
// // // |--------------------------------------------------------------------------
// // // | CONFIGURATION
// // // |--------------------------------------------------------------------------
// // // */

// // // const PORT = process.env.PORT || 5000;

// // // const MONGO_URI = process.env.MONGO_URI;

// // // const EMAIL_USER = process.env.EMAIL_USER;

// // // const EMAIL_PASS = process.env.EMAIL_PASS;

// // // const ZOOM_MEETING_LINK =
// // //     process.env.ZOOM_MEETING_LINK ||
// // //     "https://zoom.us/j/YOUR_MEETING_ID";

// // // const WHATSAPP_COMMUNITY_LINK =
// // //     process.env.WHATSAPP_COMMUNITY_LINK ||
// // //     "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK";


// // // /*
// // // |--------------------------------------------------------------------------
// // // | VALIDATE ENVIRONMENT
// // // |--------------------------------------------------------------------------
// // // */

// // // if (!MONGO_URI) {

// // //     console.error(
// // //         "❌ MONGO_URI is missing in .env"
// // //     );

// // // }

// // // if (!EMAIL_USER || !EMAIL_PASS) {

// // //     console.warn(
// // //         "⚠️ EMAIL_USER or EMAIL_PASS is missing."
// // //     );

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | MONGODB CONNECTION
// // // |--------------------------------------------------------------------------
// // // */

// // // mongoose
// // //     .connect(MONGO_URI)
// // //     .then(() => {

// // //         console.log(
// // //             "✅ MongoDB Connected"
// // //         );

// // //     })
// // //     .catch((error) => {

// // //         console.error(
// // //             "❌ MongoDB Connection Error:",
// // //             error.message
// // //         );

// // //     });


// // // /*
// // // |--------------------------------------------------------------------------
// // // | LEAD SCHEMA
// // // |--------------------------------------------------------------------------
// // // */

// // // const leadSchema =
// // //     new mongoose.Schema({

// // //         name: {
// // //             type: String,
// // //             required: true,
// // //             trim: true
// // //         },

// // //         phone: {
// // //             type: String,
// // //             required: true,
// // //             unique: true,
// // //             trim: true
// // //         },

// // //         email: {
// // //             type: String,
// // //             required: true,
// // //             trim: true,
// // //             lowercase: true
// // //         },

// // //         state: {
// // //             type: String,
// // //             required: true,
// // //             trim: true
// // //         },

// // //         communityJoined: {
// // //             type: Boolean,
// // //             default: false
// // //         },

// // //         communityJoinDate: {
// // //             type: Date
// // //         },

// // //         zoomEmailSent: {
// // //             type: Boolean,
// // //             default: false
// // //         },

// // //         zoomReminderSent: {
// // //             type: Boolean,
// // //             default: false
// // //         },

// // //         registrationDate: {
// // //             type: Date,
// // //             default: Date.now
// // //         }

// // //     });


// // // const Lead =
// // //     mongoose.model(
// // //         "Lead",
// // //         leadSchema
// // //     );


// // // /*
// // // |--------------------------------------------------------------------------
// // // | EMAIL TRANSPORTER
// // // |--------------------------------------------------------------------------
// // // |
// // // | For Gmail use:
// // // |
// // // | EMAIL_USER=yourgmail@gmail.com
// // // | EMAIL_PASS=your 16 digit Gmail App Password
// // // |
// // // |--------------------------------------------------------------------------
// // // */

// // // let transporter = null;


// // // if (EMAIL_USER && EMAIL_PASS) {

// // //     transporter =
// // //         nodemailer.createTransport({

// // //             service: "gmail",

// // //             auth: {
// // //                 user: EMAIL_USER,
// // //                 pass: EMAIL_PASS
// // //             }

// // //         });

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | WEBINAR DATES
// // // |--------------------------------------------------------------------------
// // // |
// // // | India timezone: Asia/Kolkata (+05:30)
// // // |
// // // */

// // // const WEBINAR_DATES = [

// // //     "2026-09-08T20:00:00+05:30",

// // //     "2026-09-09T20:00:00+05:30",

// // //     "2026-09-10T20:00:00+05:30"

// // // ];


// // // /*
// // // |--------------------------------------------------------------------------
// // // | EMAIL - REGISTRATION CONFIRMATION
// // // |--------------------------------------------------------------------------
// // // */

// // // async function sendRegistrationEmail(lead) {

// // //     if (!transporter) {

// // //         console.warn(
// // //             "⚠️ Email transporter not configured."
// // //         );

// // //         return false;

// // //     }


// // //     const mailOptions = {

// // //         from: `"I TECH AI" <${EMAIL_USER}>`,

// // //         to: lead.email,

// // //         subject:
// // //             "🎉 Your Webinar Registration is Confirmed | I TECH AI",

// // //         html: `

// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta charset="UTF-8">

// // // </head>

// // // <body style="
// // //     margin:0;
// // //     padding:0;
// // //     background:#f5f5f5;
// // //     font-family:Arial,sans-serif;
// // // ">

// // // <div style="
// // //     max-width:600px;
// // //     margin:30px auto;
// // //     background:#ffffff;
// // //     border-radius:12px;
// // //     overflow:hidden;
// // // ">

// // // <div style="
// // //     background:#d35400;
// // //     color:#ffffff;
// // //     padding:25px;
// // //     text-align:center;
// // // ">

// // // <h1 style="margin:0;">
// // //     I TECH AI
// // // </h1>

// // // <p style="margin:8px 0 0;">
// // //     Webinar Registration
// // // </p>

// // // </div>


// // // <div style="
// // //     padding:30px;
// // // ">

// // // <h2>
// // //     Hello ${escapeHtml(lead.name)} 👋
// // // </h2>


// // // <p style="
// // //     color:#555;
// // //     line-height:1.7;
// // // ">

// // // Your registration for the I TECH AI webinar
// // // has been successfully confirmed.

// // // </p>


// // // <div style="
// // //     background:#fff3e2;
// // //     padding:20px;
// // //     border-radius:10px;
// // //     margin:20px 0;
// // // ">

// // // <h3 style="
// // //     margin-top:0;
// // //     color:#d35400;
// // // ">

// // // 📅 Webinar Details

// // // </h3>

// // // <p>
// // // <strong>Date:</strong>
// // // 8th, 9th & 10th September 2026
// // // </p>

// // // <p>
// // // <strong>Time:</strong>
// // // 8:00 PM – 9:00 PM
// // // </p>

// // // <p>
// // // <strong>Speaker:</strong>
// // // Acharya Pankaj Ji
// // // </p>

// // // <p>
// // // <strong>Platform:</strong>
// // // Zoom
// // // </p>

// // // </div>


// // // <div style="
// // //     text-align:center;
// // //     margin:25px 0;
// // // ">

// // // <a
// // //     href="${ZOOM_MEETING_LINK}"
// // //     target="_blank"
// // //     style="
// // //         display:inline-block;
// // //         background:#2D8CFF;
// // //         color:#ffffff;
// // //         text-decoration:none;
// // //         padding:14px 25px;
// // //         border-radius:8px;
// // //         font-weight:bold;
// // //     "
// // // >

// // // 🎥 JOIN ZOOM WEBINAR

// // // </a>

// // // </div>


// // // <div style="
// // //     text-align:center;
// // //     margin:25px 0;
// // // ">

// // // <a
// // //     href="${WHATSAPP_COMMUNITY_LINK}"
// // //     target="_blank"
// // //     style="
// // //         display:inline-block;
// // //         background:#25D366;
// // //         color:#ffffff;
// // //         text-decoration:none;
// // //         padding:14px 25px;
// // //         border-radius:8px;
// // //         font-weight:bold;
// // //     "
// // // >

// // // 💬 JOIN WHATSAPP COMMUNITY

// // // </a>

// // // </div>


// // // <p style="
// // //     color:#666;
// // //     line-height:1.7;
// // // ">

// // // Please save this email.
// // // We will also send you a reminder before the webinar.

// // // </p>


// // // <p>
// // // See you at the webinar! 🎓
// // // </p>


// // // </div>


// // // <div style="
// // //     background:#222;
// // //     color:#aaa;
// // //     padding:18px;
// // //     text-align:center;
// // //     font-size:12px;
// // // ">

// // // © 2026 I TECH AI

// // // </div>

// // // </div>

// // // </body>

// // // </html>

// // // `

// // //     };


// // //     try {

// // //         await transporter.sendMail(
// // //             mailOptions
// // //         );

// // //         console.log(
// // //             `📧 Registration email sent to ${lead.email}`
// // //         );

// // //         return true;

// // //     } catch (error) {

// // //         console.error(
// // //             "❌ Registration email error:",
// // //             error.message
// // //         );

// // //         return false;

// // //     }

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | EMAIL - WEBINAR REMINDER
// // // |--------------------------------------------------------------------------
// // // */

// // // async function sendReminderEmail(lead) {

// // //     if (!transporter) {

// // //         return false;

// // //     }


// // //     const mailOptions = {

// // //         from:
// // //             `"I TECH AI" <${EMAIL_USER}>`,

// // //         to: lead.email,

// // //         subject:
// // //             "⏰ Webinar starts in 30 minutes | I TECH AI",

// // //         html: `

// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta charset="UTF-8">

// // // </head>

// // // <body style="
// // //     margin:0;
// // //     padding:0;
// // //     background:#f5f5f5;
// // //     font-family:Arial,sans-serif;
// // // ">

// // // <div style="
// // //     max-width:600px;
// // //     margin:30px auto;
// // //     background:#ffffff;
// // //     border-radius:12px;
// // //     overflow:hidden;
// // // ">

// // // <div style="
// // //     background:#d35400;
// // //     color:#ffffff;
// // //     padding:25px;
// // //     text-align:center;
// // // ">

// // // <h1>
// // //     ⏰ Webinar Reminder
// // // </h1>

// // // </div>


// // // <div style="
// // //     padding:30px;
// // // ">

// // // <h2>
// // //     Hello ${escapeHtml(lead.name)} 👋
// // // </h2>


// // // <p style="
// // //     font-size:16px;
// // //     line-height:1.7;
// // // ">

// // // Your I TECH AI webinar starts in
// // // <strong>30 minutes</strong>.

// // // </p>


// // // <div style="
// // //     background:#fff3e2;
// // //     padding:20px;
// // //     border-radius:10px;
// // // ">

// // // <p>
// // // <strong>📅 Date:</strong>
// // // 8th, 9th & 10th September 2026
// // // </p>

// // // <p>
// // // <strong>⏰ Time:</strong>
// // // 8:00 PM – 9:00 PM
// // // </p>

// // // <p>
// // // <strong>🎤 Speaker:</strong>
// // // Acharya Pankaj Ji
// // // </p>

// // // </div>


// // // <div style="
// // //     text-align:center;
// // //     margin:30px 0;
// // // ">

// // // <a
// // //     href="${ZOOM_MEETING_LINK}"
// // //     target="_blank"
// // //     style="
// // //         display:inline-block;
// // //         background:#2D8CFF;
// // //         color:#ffffff;
// // //         text-decoration:none;
// // //         padding:15px 30px;
// // //         border-radius:8px;
// // //         font-weight:bold;
// // //     "
// // // >

// // // 🎥 JOIN ZOOM NOW

// // // </a>

// // // </div>


// // // <p style="
// // //     color:#666;
// // //     line-height:1.7;
// // // ">

// // // Please join a few minutes before the session starts.

// // // </p>


// // // </div>


// // // <div style="
// // //     background:#222;
// // //     color:#aaa;
// // //     padding:18px;
// // //     text-align:center;
// // //     font-size:12px;
// // // ">

// // // © 2026 I TECH AI

// // // </div>

// // // </div>

// // // </body>

// // // </html>

// // // `

// // //     };


// // //     try {

// // //         await transporter.sendMail(
// // //             mailOptions
// // //         );

// // //         console.log(
// // //             `🔔 Reminder sent to ${lead.email}`
// // //         );

// // //         return true;

// // //     } catch (error) {

// // //         console.error(
// // //             "❌ Reminder email error:",
// // //             error.message
// // //         );

// // //         return false;

// // //     }

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | ESCAPE HTML
// // // |--------------------------------------------------------------------------
// // // */

// // // function escapeHtml(value) {

// // //     return String(value)

// // //         .replace(/&/g, "&amp;")

// // //         .replace(/</g, "&lt;")

// // //         .replace(/>/g, "&gt;")

// // //         .replace(/"/g, "&quot;")

// // //         .replace(/'/g, "&#039;");

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | HEALTH CHECK
// // // |--------------------------------------------------------------------------
// // // */

// // // app.get(
// // //     "/",
// // //     (req, res) => {

// // //         res.json({

// // //             success: true,

// // //             message:
// // //                 "I TECH AI Webinar API is running",

// // //             webinarDates:
// // //                 WEBINAR_DATES

// // //         });

// // //     }
// // // );


// // // /*
// // // |--------------------------------------------------------------------------
// // // | POST /api/leads
// // // |--------------------------------------------------------------------------
// // // |
// // // | Register user.
// // // |
// // // */

// // // app.post(
// // //     "/api/leads",
// // //     async (req, res) => {

// // //         try {

// // //             const {
// // //                 name,
// // //                 phone,
// // //                 email,
// // //                 state,
// // //                 communityJoined
// // //             } = req.body;


// // //             /*
// // //              * Validate fields
// // //              */

// // //             if (
// // //                 !name ||
// // //                 !phone ||
// // //                 !email ||
// // //                 !state
// // //             ) {

// // //                 return res.status(400).json({

// // //                     success: false,

// // //                     message:
// // //                         "Please fill all required fields."

// // //                 });

// // //             }


// // //             /*
// // //              * Community validation
// // //              */

// // //             if (communityJoined !== true) {

// // //                 return res.status(400).json({

// // //                     success: false,

// // //                     message:
// // //                         "Please join the WhatsApp Community before registering."

// // //                 });

// // //             }


// // //             /*
// // //              * Normalize phone
// // //              */

// // //             const normalizedPhone =
// // //                 String(phone)
// // //                     .replace(/\D/g, "")
// // //                     .slice(-10);


// // //             if (
// // //                 normalizedPhone.length !== 10
// // //             ) {

// // //                 return res.status(400).json({

// // //                     success: false,

// // //                     message:
// // //                         "Please enter a valid 10-digit WhatsApp number."

// // //                 });

// // //             }


// // //             /*
// // //              * Check duplicate phone
// // //              */

// // //             const existingLead =
// // //                 await Lead.findOne({

// // //                     phone:
// // //                         normalizedPhone

// // //                 });


// // //             if (existingLead) {

// // //                 return res.status(409).json({

// // //                     success: false,

// // //                     message:
// // //                         "This WhatsApp number is already registered."

// // //                 });

// // //             }


// // //             /*
// // //              * Create lead
// // //              */

// // //             const newLead =
// // //                 new Lead({

// // //                     name:
// // //                         String(name).trim(),

// // //                     phone:
// // //                         normalizedPhone,

// // //                     email:
// // //                         String(email)
// // //                             .trim()
// // //                             .toLowerCase(),

// // //                     state:
// // //                         String(state).trim(),

// // //                     communityJoined:
// // //                         true,

// // //                     communityJoinDate:
// // //                         new Date(),

// // //                     zoomEmailSent:
// // //                         false,

// // //                     zoomReminderSent:
// // //                         false

// // //                 });


// // //             await newLead.save();


// // //             /*
// // //              * Send registration email
// // //              */

// // //             const emailSent =
// // //                 await sendRegistrationEmail(
// // //                     newLead
// // //                 );


// // //             /*
// // //              * Update email status
// // //              */

// // //             if (emailSent) {

// // //                 newLead.zoomEmailSent =
// // //                     true;

// // //                 await newLead.save();

// // //             }


// // //             /*
// // //              * Response
// // //              */

// // //             return res.status(201).json({

// // //                 success: true,

// // //                 message:
// // //                     emailSent
// // //                         ? "Registration successful. Zoom link has been sent to your email."
// // //                         : "Registration successful. Please use the Zoom link below.",

// // //                 zoomLink:
// // //                     ZOOM_MEETING_LINK,

// // //                 whatsappCommunityLink:
// // //                     WHATSAPP_COMMUNITY_LINK,

// // //                 emailSent

// // //             });


// // //         } catch (error) {

// // //             console.error(
// // //                 "❌ Registration Error:",
// // //                 error
// // //             );


// // //             /*
// // //              * Duplicate MongoDB key
// // //              */

// // //             if (
// // //                 error.code === 11000
// // //             ) {

// // //                 return res.status(409).json({

// // //                     success: false,

// // //                     message:
// // //                         "This WhatsApp number is already registered."

// // //                 });

// // //             }


// // //             return res.status(500).json({

// // //                 success: false,

// // //                 message:
// // //                     "Server Error. Please try again."

// // //             });

// // //         }

// // //     }
// // // );


// // // /*
// // // |--------------------------------------------------------------------------
// // // | GET /api/leads
// // // |--------------------------------------------------------------------------
// // // |
// // // | Admin / testing endpoint.
// // // |
// // // */

// // // app.get(
// // //     "/api/leads",
// // //     async (req, res) => {

// // //         try {

// // //             const leads =
// // //                 await Lead
// // //                     .find()
// // //                     .sort({
// // //                         registrationDate: -1
// // //                     })
// // //                     .lean();


// // //             return res.json({

// // //                 success: true,

// // //                 total:
// // //                     leads.length,

// // //                 communityJoined:
// // //                     leads.filter(
// // //                         lead =>
// // //                             lead.communityJoined === true
// // //                     ).length,

// // //                 zoomEmailSent:
// // //                     leads.filter(
// // //                         lead =>
// // //                             lead.zoomEmailSent === true
// // //                     ).length,

// // //                 zoomReminderSent:
// // //                     leads.filter(
// // //                         lead =>
// // //                             lead.zoomReminderSent === true
// // //                     ).length,

// // //                 data:
// // //                     leads

// // //             });


// // //         } catch (error) {

// // //             console.error(
// // //                 "❌ Get Leads Error:",
// // //                 error.message
// // //             );


// // //             return res.status(500).json({

// // //                 success: false,

// // //                 message:
// // //                     error.message

// // //             });

// // //         }

// // //     }
// // // );


// // // /*
// // // |--------------------------------------------------------------------------
// // // | REMINDER SYSTEM
// // // |--------------------------------------------------------------------------
// // // |
// // // | Checks every minute.
// // // |
// // // | Reminder = 30 minutes before webinar.
// // // |
// // // */

// // // async function checkWebinarReminders() {

// // //     try {

// // //         const now =
// // //             Date.now();


// // //         for (
// // //             const webinarDateString
// // //             of WEBINAR_DATES
// // //         ) {

// // //             const webinarTime =
// // //                 new Date(
// // //                     webinarDateString
// // //                 ).getTime();


// // //             const reminderTime =
// // //                 webinarTime -
// // //                 (30 * 60 * 1000);


// // //             /*
// // //              * Allow 1 minute window
// // //              */

// // //             if (
// // //                 now >= reminderTime &&
// // //                 now < reminderTime + 60000
// // //             ) {

// // //                 console.log(
// // //                     "⏰ Reminder window reached:",
// // //                     webinarDateString
// // //                 );


// // //                 const leads =
// // //                     await Lead.find({

// // //                         zoomEmailSent:
// // //                             true,

// // //                         zoomReminderSent:
// // //                             false

// // //                     });


// // //                 console.log(
// // //                     `📧 Sending reminders to ${leads.length} users`
// // //                 );


// // //                 for (
// // //                     const lead
// // //                     of leads
// // //                 ) {

// // //                     const sent =
// // //                         await sendReminderEmail(
// // //                             lead
// // //                         );


// // //                     if (sent) {

// // //                         lead.zoomReminderSent =
// // //                             true;

// // //                         await lead.save();

// // //                     }

// // //                 }

// // //             }

// // //         }

// // //     } catch (error) {

// // //         console.error(
// // //             "❌ Reminder scheduler error:",
// // //             error.message
// // //         );

// // //     }

// // // }


// // // /*
// // // |--------------------------------------------------------------------------
// // // | START REMINDER SCHEDULER
// // // |--------------------------------------------------------------------------
// // // */

// // // setInterval(
// // //     checkWebinarReminders,
// // //     60 * 1000
// // // );


// // // /*
// // //  * Run once when server starts.
// // //  */

// // // checkWebinarReminders();


// // // /*
// // // |--------------------------------------------------------------------------
// // // | START SERVER
// // // |--------------------------------------------------------------------------
// // // */

// // // app.listen(
// // //     PORT,
// // //     () => {

// // //         console.log(
// // //             `🚀 I TECH AI server running on port ${PORT}`
// // //         );

// // //         console.log(
// // //             `🌐 API: http://localhost:${PORT}`
// // //         );

// // //         console.log(
// // //             `📱 WhatsApp Community: ${WHATSAPP_COMMUNITY_LINK}`
// // //         );

// // //         console.log(
// // //             `🎥 Zoom: ${ZOOM_MEETING_LINK}`
// // //         );

// // //     }
// // // );



// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // require("dotenv").config();

// // const app = express();

// // app.use(
// //   cors({
// //     origin: "*",
// //   })
// // );

// // app.use(express.json());

// // /* =========================================================
// //    ENVIRONMENT VARIABLES
// // ========================================================= */

// // const PORT = process.env.PORT || 5000;

// // const MONGO_URI = process.env.MONGO_URI;

// // const EMAIL_USER = process.env.EMAIL_USER;
// // const EMAIL_PASS = process.env.EMAIL_PASS;

// // const ZOOM_MEETING_LINK = process.env.https://meet.google.com/uca-deoe-vnh?hs=151;

// // const WHATSAPP_COMMUNITY_LINK =
// //   process.env.https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E;


// // /* =========================================================
// //    BASIC ENV CHECK
// // ========================================================= */

// // if (!MONGO_URI) {
// //   console.error("❌ MONGO_URI is missing in .env");
// // }

// // if (!EMAIL_USER || !EMAIL_PASS) {
// //   console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
// // }

// // if (!ZOOM_MEETING_LINK) {
// //   console.error("❌ ZOOM_MEETING_LINK is missing in .env");
// // }

// // if (!WHATSAPP_COMMUNITY_LINK) {
// //   console.error("❌ WHATSAPP_COMMUNITY_LINK is missing in .env");
// // }


// // /* =========================================================
// //    MONGODB CONNECTION
// // ========================================================= */

// // mongoose
// //   .connect(MONGO_URI)
// //   .then(() => {
// //     console.log("✅ MongoDB connected");
// //   })
// //   .catch((error) => {
// //     console.error("❌ MongoDB connection error:");
// //     console.error(error.message);
// //   });


// // /* =========================================================
// //    LEAD SCHEMA
// // ========================================================= */

// // const leadSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //       trim: true,
// //     },

// //     phone: {
// //       type: String,
// //       required: true,
// //       unique: true,
// //       trim: true,
// //     },

// //     email: {
// //       type: String,
// //       required: true,
// //       trim: true,
// //       lowercase: true,
// //     },

// //     state: {
// //       type: String,
// //       required: true,
// //       trim: true,
// //     },

// //     communityJoined: {
// //       type: Boolean,
// //       default: false,
// //     },

// //     communityJoinDate: {
// //       type: Date,
// //       default: null,
// //     },

// //     zoomEmailSent: {
// //       type: Boolean,
// //       default: false,
// //     },

// //     zoomReminderSent: {
// //       type: Boolean,
// //       default: false,
// //     },

// //     registrationDate: {
// //       type: Date,
// //       default: Date.now,
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const Lead = mongoose.model("Lead", leadSchema);


// // /* =========================================================
// //    EMAIL TRANSPORTER
// // ========================================================= */

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",

// //   auth: {
// //     user: EMAIL_USER,
// //     pass: EMAIL_PASS,
// //   },
// // });


// // /* =========================================================
// //    CHECK EMAIL CONFIGURATION
// // ========================================================= */

// // async function verifyEmailConfiguration() {
// //   if (!EMAIL_USER || !EMAIL_PASS) {
// //     console.log("⚠️ Email configuration not available");
// //     return;
// //   }

// //   try {
// //     await transporter.verify();

// //     console.log("✅ Email service ready");
// //   } catch (error) {
// //     console.error("❌ Email service error:");
// //     console.error(error.message);
// //   }
// // }


// // /* =========================================================
// //    REGISTRATION EMAIL
// // ========================================================= */

// // async function sendRegistrationEmail(lead) {
// //   const mailOptions = {
// //     from: `"I TECH AI" <${EMAIL_USER}>`,

// //     to: lead.email,

// //     subject: "🎉 Your Webinar Registration is Confirmed",

// //     html: `
// //       <!DOCTYPE html>

// //       <html>

// //       <head>

// //         <meta charset="UTF-8">

// //         <meta name="viewport"
// //               content="width=device-width, initial-scale=1.0">

// //       </head>

// //       <body
// //         style="
// //           margin:0;
// //           padding:0;
// //           background:#f5f5f5;
// //           font-family:Arial,Helvetica,sans-serif;
// //         "
// //       >

// //         <div
// //           style="
// //             max-width:600px;
// //             margin:30px auto;
// //             background:white;
// //             border-radius:12px;
// //             overflow:hidden;
// //             box-shadow:0 5px 20px rgba(0,0,0,0.08);
// //           "
// //         >

// //           <div
// //             style="
// //               background:#f97316;
// //               color:white;
// //               padding:30px 20px;
// //               text-align:center;
// //             "
// //           >

// //             <h1 style="margin:0;">
// //               🎉 Registration Confirmed
// //             </h1>

// //             <p style="margin:10px 0 0;">
// //               I TECH AI Webinar
// //             </p>

// //           </div>


// //           <div style="padding:30px 25px;">

// //             <p>
// //               Hello <strong>${lead.name}</strong>,
// //             </p>

// //             <p>
// //               Thank you for registering for the I TECH AI webinar.
// //               Your registration has been successfully completed.
// //             </p>


// //             <div
// //               style="
// //                 background:#fff7ed;
// //                 border-left:4px solid #f97316;
// //                 padding:18px;
// //                 margin:20px 0;
// //               "
// //             >

// //               <h3 style="margin-top:0;">
// //                 📅 Webinar Schedule
// //               </h3>

// //               <p>
// //                 <strong>8th, 9th & 10th September</strong>
// //               </p>

// //               <p>
// //                 🕗 Time: <strong>8:00 PM – 9:00 PM</strong>
// //               </p>

// //             </div>


// //             <div style="text-align:center;margin:25px 0;">

// //               <a
// //                 href="${https:meet.google.com/uca-deoe-vnh?hs=151}"
// //                 target="_blank"
// //                 style="
// //                   display:inline-block;
// //                   background:#f97316;
// //                   color:white;
// //                   text-decoration:none;
// //                   padding:14px 25px;
// //                   border-radius:8px;
// //                   font-weight:bold;
// //                 "
// //               >
// //                 🎥 Join Zoom Webinar
// //               </a>

// //             </div>


// //             <div style="text-align:center;margin:25px 0;">

// //               <a
// //                 href="${WHATSAPP_COMMUNITY_LINK}"
// //                 target="_blank"
// //                 style="
// //                   display:inline-block;
// //                   background:#16a34a;
// //                   color:white;
// //                   text-decoration:none;
// //                   padding:14px 25px;
// //                   border-radius:8px;
// //                   font-weight:bold;
// //                 "
// //               >
// //                 💬 Join WhatsApp Community
// //               </a>

// //             </div>


// //             <p style="margin-top:30px;">
// //               Please save this email so that you can easily access
// //               the webinar link.
// //             </p>


// //             <p>
// //               Regards,<br>
// //               <strong>I TECH AI Team</strong>
// //             </p>

// //           </div>


// //           <div
// //             style="
// //               background:#fafafa;
// //               padding:20px;
// //               text-align:center;
// //               color:#777;
// //               font-size:13px;
// //             "
// //           >

// //             © ${new Date().getFullYear()} I TECH AI

// //           </div>

// //         </div>

// //       </body>

// //       </html>
// //     `,
// //   };

// //   await transporter.sendMail(mailOptions);
// // }


// // /* =========================================================
// //    WEBINAR DATES
// // ========================================================= */

// // const webinarDates = [
// //   "2026-09-08T20:00:00+05:30",
// //   "2026-09-09T20:00:00+05:30",
// //   "2026-09-10T20:00:00+05:30",
// // ];


// // /* =========================================================
// //    REMINDER EMAIL
// // ========================================================= */

// // async function sendReminderEmail(lead) {
// //   const mailOptions = {
// //     from: `"I TECH AI" <${EMAIL_USER}>`,

// //     to: lead.email,

// //     subject: "⏰ Webinar Starts in 30 Minutes",

// //     html: `
// //       <!DOCTYPE html>

// //       <html>

// //       <body
// //         style="
// //           margin:0;
// //           padding:0;
// //           background:#f5f5f5;
// //           font-family:Arial,Helvetica,sans-serif;
// //         "
// //       >

// //         <div
// //           style="
// //             max-width:600px;
// //             margin:30px auto;
// //             background:white;
// //             border-radius:12px;
// //             overflow:hidden;
// //           "
// //         >

// //           <div
// //             style="
// //               background:#f97316;
// //               color:white;
// //               padding:25px;
// //               text-align:center;
// //             "
// //           >

// //             <h1 style="margin:0;">
// //               ⏰ Webinar Reminder
// //             </h1>

// //           </div>


// //           <div style="padding:30px;">

// //             <p>
// //               Hello <strong>${lead.name}</strong>,
// //             </p>

// //             <p>
// //               Your I TECH AI webinar is starting in approximately
// //               <strong>30 minutes</strong>.
// //             </p>


// //             <div
// //               style="
// //                 background:#fff7ed;
// //                 padding:18px;
// //                 border-radius:8px;
// //                 margin:20px 0;
// //               "
// //             >

// //               <p>
// //                 📅 <strong>8th, 9th & 10th September</strong>
// //               </p>

// //               <p>
// //                 🕗 <strong>8:00 PM – 9:00 PM</strong>
// //               </p>

// //             </div>


// //             <div style="text-align:center;margin:25px 0;">

// //               <a
// //                 href="${ZOOM_MEETING_LINK}"
// //                 target="_blank"
// //                 style="
// //                   display:inline-block;
// //                   background:#f97316;
// //                   color:white;
// //                   text-decoration:none;
// //                   padding:15px 28px;
// //                   border-radius:8px;
// //                   font-weight:bold;
// //                 "
// //               >
// //                 🎥 Join Webinar Now
// //               </a>

// //             </div>


// //             <p>
// //               See you inside the webinar!
// //             </p>


// //             <p>
// //               Regards,<br>
// //               <strong>I TECH AI Team</strong>
// //             </p>

// //           </div>

// //         </div>

// //       </body>

// //       </html>
// //     `,
// //   };

// //   await transporter.sendMail(mailOptions);
// // }


// // /* =========================================================
// //    HEALTH CHECK
// // ========================================================= */

// // app.get("/", (req, res) => {
// //   res.json({
// //     success: true,
// //     message: "I TECH AI Webinar Backend is running 🚀",
// //   });
// // });


// // /* =========================================================
// //    CREATE LEAD
// // ========================================================= */

// // app.post("/api/leads", async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       phone,
// //       email,
// //       state,
// //       communityJoined,
// //     } = req.body;


// //     /* -----------------------------
// //        VALIDATION
// //     ----------------------------- */

// //     if (!name || !phone || !email || !state) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Name, phone, email and state are required.",
// //       });
// //     }


// //     if (communityJoined !== true) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Please join the WhatsApp Community before submitting the form.",
// //       });
// //     }


// //     /* -----------------------------
// //        NORMALIZE PHONE
// //     ----------------------------- */

// //     const normalizedPhone = String(phone)
// //       .replace(/\D/g, "")
// //       .slice(-10);


// //     if (normalizedPhone.length !== 10) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Please enter a valid 10-digit WhatsApp number.",
// //       });
// //     }


// //     /* -----------------------------
// //        CHECK DUPLICATE
// //     ----------------------------- */

// //     const existingLead = await Lead.findOne({
// //       phone: normalizedPhone,
// //     });


// //     if (existingLead) {
// //       return res.status(409).json({
// //         success: false,
// //         message:
// //           "This WhatsApp number is already registered for the webinar.",
// //         zoomLink: ZOOM_MEETING_LINK,
// //         whatsappCommunityLink: WHATSAPP_COMMUNITY_LINK,
// //       });
// //     }


// //     /* -----------------------------
// //        CREATE LEAD
// //     ----------------------------- */

// //     const lead = new Lead({
// //       name: String(name).trim(),

// //       phone: normalizedPhone,

// //       email: String(email).trim().toLowerCase(),

// //       state: String(state).trim(),

// //       communityJoined: true,

// //       communityJoinDate: new Date(),

// //       registrationDate: new Date(),
// //     });


// //     await lead.save();


// //     /* -----------------------------
// //        SEND EMAIL
// //     ----------------------------- */

// //     let emailSent = false;


// //     try {
// //       await sendRegistrationEmail(lead);

// //       lead.zoomEmailSent = true;

// //       await lead.save();

// //       emailSent = true;

// //       console.log(
// //         `📧 Registration email sent to ${lead.email}`
// //       );

// //     } catch (emailError) {

// //       console.error(
// //         "❌ Registration email failed:",
// //         emailError.message
// //       );

// //     }


// //     /* -----------------------------
// //        RESPONSE
// //     ----------------------------- */

// //     return res.status(201).json({
// //       success: true,

// //       message:
// //         "Registration successful! Zoom and WhatsApp links are ready.",

// //       zoomLink: ZOOM_MEETING_LINK,

// //       whatsappCommunityLink:
// //         WHATSAPP_COMMUNITY_LINK,

// //       emailSent,
// //     });

// //   } catch (error) {

// //     console.error("❌ Lead creation error:");
// //     console.error(error);


// //     return res.status(500).json({
// //       success: false,
// //       message: "Server error. Please try again later.",
// //     });
// //   }
// // });


// // /* =========================================================
// //    GET ALL LEADS
// // ========================================================= */

// // app.get("/api/leads", async (req, res) => {
// //   try {

// //     const leads = await Lead.find()
// //       .sort({
// //         registrationDate: -1,
// //       })
// //       .lean();


// //     const total = leads.length;

// //     const communityJoined = leads.filter(
// //       (lead) => lead.communityJoined === true
// //     ).length;

// //     const zoomEmailSent = leads.filter(
// //       (lead) => lead.zoomEmailSent === true
// //     ).length;

// //     const zoomReminderSent = leads.filter(
// //       (lead) => lead.zoomReminderSent === true
// //     ).length;


// //     return res.json({
// //       success: true,

// //       total,

// //       communityJoined,

// //       zoomEmailSent,

// //       zoomReminderSent,

// //       data: leads,
// //     });

// //   } catch (error) {

// //     console.error(
// //       "❌ Error fetching leads:",
// //       error.message
// //     );

// //     return res.status(500).json({
// //       success: false,
// //       message: "Unable to fetch leads.",
// //     });
// //   }
// // });


// // /* =========================================================
// //    GET SINGLE LEAD
// // ========================================================= */

// // app.get("/api/leads/:phone", async (req, res) => {
// //   try {

// //     const normalizedPhone = String(
// //       req.params.phone
// //     )
// //       .replace(/\D/g, "")
// //       .slice(-10);


// //     const lead = await Lead.findOne({
// //       phone: normalizedPhone,
// //     }).lean();


// //     if (!lead) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Lead not found.",
// //       });
// //     }


// //     return res.json({
// //       success: true,
// //       data: lead,
// //     });

// //   } catch (error) {

// //     console.error(
// //       "❌ Error fetching lead:",
// //       error.message
// //     );

// //     return res.status(500).json({
// //       success: false,
// //       message: "Server error.",
// //     });
// //   }
// // });


// // /* =========================================================
// //    MANUAL TEST EMAIL
// // ========================================================= */

// // app.post("/api/test-email", async (req, res) => {
// //   try {

// //     const { email } = req.body;


// //     if (!email) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Email is required.",
// //       });
// //     }


// //     const testLead = {
// //       name: "Test User",
// //       email,
// //     };


// //     await sendRegistrationEmail(testLead);


// //     return res.json({
// //       success: true,
// //       message: "Test email sent successfully.",
// //     });

// //   } catch (error) {

// //     console.error(
// //       "❌ Test email failed:",
// //       error.message
// //     );

// //     return res.status(500).json({
// //       success: false,
// //       message: "Test email failed.",
// //       error: error.message,
// //     });
// //   }
// // });


// // /* =========================================================
// //    REMINDER SCHEDULER
// // ========================================================= */

// // async function checkAndSendReminders() {

// //   try {

// //     const now = new Date();


// //     for (const webinarDateString of webinarDates) {

// //       const webinarDate =
// //         new Date(webinarDateString);


// //       const reminderTime =
// //         new Date(
// //           webinarDate.getTime() -
// //           30 * 60 * 1000
// //         );


// //       const currentDifference =
// //         Math.abs(
// //           now.getTime() -
// //           reminderTime.getTime()
// //         );


// //       /*
// //        * Run reminder when current time is within
// //        * approximately 1 minute of reminder time.
// //        */

// //       if (currentDifference <= 60 * 1000) {

// //         console.log(
// //           `⏰ Reminder window reached for ${webinarDateString}`
// //         );


// //         const leads = await Lead.find({
// //           zoomEmailSent: true,
// //         });


// //         for (const lead of leads) {

// //           try {

// //             await sendReminderEmail(lead);


// //             lead.zoomReminderSent = true;

// //             await lead.save();


// //             console.log(
// //               `📧 Reminder sent to ${lead.email}`
// //             );

// //           } catch (error) {

// //             console.error(
// //               `❌ Reminder failed for ${lead.email}:`,
// //               error.message
// //             );

// //           }

// //         }

// //       }

// //     }

// //   } catch (error) {

// //     console.error(
// //       "❌ Reminder scheduler error:",
// //       error.message
// //     );
// //   }
// // }


// // /* =========================================================
// //    START REMINDER CHECK
// // ========================================================= */

// // setInterval(
// //   checkAndSendReminders,
// //   60 * 1000
// // );


// // /* =========================================================
// //    START SERVER
// // ========================================================= */

// // app.listen(PORT, () => {

// //   console.log("");
// //   console.log("======================================");
// //   console.log("🚀 I TECH AI WEBINAR BACKEND");
// //   console.log("======================================");
// //   console.log(`🌐 Server: http://localhost:${PORT}`);
// //   console.log(`📋 Leads:  http://localhost:${PORT}/api/leads`);
// //   console.log("📧 Email system: enabled");
// //   console.log("🎥 Zoom link: configured from .env");
// //   console.log("💬 WhatsApp link: configured from .env");
// //   console.log("⏰ Reminder scheduler: running");
// //   console.log("======================================");
// //   console.log("");

// //   verifyEmailConfiguration();

// // });



// const express = require("express");
// const path= require("path");
// const mongoose = require("mongoose");
// const fs = require("fs");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();

// /* =========================================================
//    MIDDLEWARE
// ========================================================= */

// app.use(
//   cors({
//     origin: "*",
//   })
// );

// app.use(express.json());
// app.use(express.static(__dirname));
// // Serve webinar image explicitly
// app.get("/1000044144.jpg", (req, res) => {
//   const imagePath = path.join(__dirname, "1000044144.jpg");

//   if (!fs.existsSync(imagePath)) {
//     console.error("❌ Image not found:", imagePath);
//     return res.status(404).send("Image not found");
//   }

//   res.sendFile(imagePath);
// });

// /* =========================================================
//    CONFIGURATION
// ========================================================= */

// const PORT = process.env.PORT || 5000;

// const MONGO_URI = process.env.MONGO_URI;

// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;


// /* =========================================================
//    WEBINAR LINKS
// ========================================================= */

// /*
//  * Google Meet link
//  */
// const WEBINAR_MEETING_LINK =
//   "https://meet.google.com/uca-deoe-vnh?hs=151";


// /*
//  * WhatsApp Channel link
//  */
// const WHATSAPP_COMMUNITY_LINK =
//   "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";


// /* =========================================================
//    BASIC ENV CHECK
// ========================================================= */

// if (!MONGO_URI) {
//   console.error("❌ MONGO_URI is missing in .env");
// }

// if (!EMAIL_USER || !EMAIL_PASS) {
//   console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
// }


// /* =========================================================
//    MONGODB CONNECTION
// ========================================================= */

// // mongoose
// //   .connect(MONGO_URI)
// //   .then(() => {
// //     console.log("✅ MongoDB connected");
// //   })
// //   .catch((error) => {
// //     console.error("❌ MongoDB connection error:");
// //     console.error(error.message);
// //   });

// if (MONGO_URI) {
//   mongoose
//     .connect(MONGO_URI)
//     .then(() => {
//       console.log("✅ MongoDB connected");
//     })
//     .catch((error) => {
//       console.error("❌ MongoDB connection error:");
//       console.error(error.message);
//     });
// } else {
//   console.error("❌ MONGO_URI is missing. MongoDB connection skipped.");
// }


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
//    VERIFY EMAIL
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
//    ESCAPE HTML
// ========================================================= */

// function escapeHtml(value) {
//   return String(value)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }


// /* =========================================================
//    REGISTRATION EMAIL
// ========================================================= */

// async function sendRegistrationEmail(lead) {

//   const mailOptions = {
//     from: `"I TECH AI" <${EMAIL_USER}>`,

//     to: lead.email,

//     subject:
//       "🎉 Your Webinar Registration is Confirmed | I TECH AI",

//     html: `
// <!DOCTYPE html>

// <html>

// <head>

// <meta charset="UTF-8">

// <meta
//   name="viewport"
//   content="width=device-width, initial-scale=1.0"
// >

// </head>


// <body
//   style="
//     margin:0;
//     padding:0;
//     background:#f5f5f5;
//     font-family:Arial,Helvetica,sans-serif;
//   "
// >


// <div
//   style="
//     max-width:600px;
//     margin:30px auto;
//     background:white;
//     border-radius:12px;
//     overflow:hidden;
//     box-shadow:0 5px 20px rgba(0,0,0,0.08);
//   "
// >


// <!-- HEADER -->

// <div
//   style="
//     background:#f97316;
//     color:white;
//     padding:30px 20px;
//     text-align:center;
//   "
// >

// <h1 style="margin:0;">
//   🎉 Registration Confirmed
// </h1>

// <p style="margin:10px 0 0;">
//   I TECH AI Webinar
// </p>

// </div>


// <!-- CONTENT -->

// <div style="padding:30px 25px;">

// <p>
//   Hello <strong>${escapeHtml(lead.name)}</strong> 👋
// </p>


// <p>
//   Thank you for registering for the I TECH AI webinar.
//   Your registration has been successfully completed.
// </p>


// <!-- WEBINAR DETAILS -->

// <div
//   style="
//     background:#fff7ed;
//     border-left:4px solid #f97316;
//     padding:18px;
//     margin:20px 0;
//   "
// >

// <h3 style="margin-top:0;">
//   📅 Webinar Schedule
// </h3>

// <p>
//   <strong>8th, 9th & 10th September 2026</strong>
// </p>

// <p>
//   🕗 Time:
//   <strong>8:00 PM – 9:00 PM</strong>
// </p>

// <p>
//   🎤 Speaker:
//   <strong>MR Deepak sir</strong>
// </p>

// <p>
//   💻 Platform:
//   <strong>Google Meet</strong>
// </p>

// </div>


// <!-- GOOGLE MEET BUTTON -->

// <div
//   style="
//     text-align:center;
//     margin:25px 0;
//   "
// >

// <a
//   href="${WEBINAR_MEETING_LINK}"
//   target="_blank"
//   style="
//     display:inline-block;
//     background:#f97316;
//     color:white;
//     text-decoration:none;
//     padding:14px 25px;
//     border-radius:8px;
//     font-weight:bold;
//   "
// >

// 🎥 JOIN GOOGLE MEET

// </a>

// </div>


// <!-- WHATSAPP BUTTON -->

// <div
//   style="
//     text-align:center;
//     margin:25px 0;
//   "
// >

// <a
//   href="${WHATSAPP_COMMUNITY_LINK}"
//   target="_blank"
//   style="
//     display:inline-block;
//     background:#16a34a;
//     color:white;
//     text-decoration:none;
//     padding:14px 25px;
//     border-radius:8px;
//     font-weight:bold;
//   "
// >

// 💬 JOIN WHATSAPP CHANNEL

// </a>

// </div>


// <p style="margin-top:30px;">

// Please save this email so that you can easily access
// the webinar and WhatsApp links.

// </p>


// <p>

// Regards,<br>

// <strong>I TECH AI Team</strong>

// </p>

// </div>


// <!-- FOOTER -->

// <div
//   style="
//     background:#fafafa;
//     padding:20px;
//     text-align:center;
//     color:#777;
//     font-size:13px;
//   "
// >

// © ${new Date().getFullYear()} I TECH AI

// </div>


// </div>

// </body>

// </html>
// `,
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

//     from:
//       `"I TECH AI" <${EMAIL_USER}>`,

//     to:
//       lead.email,

//     subject:
//       "⏰ Webinar Starts in 30 Minutes | I TECH AI",

//     html: `
// <!DOCTYPE html>

// <html>

// <head>

// <meta charset="UTF-8">

// <meta
//   name="viewport"
//   content="width=device-width, initial-scale=1.0"
// >

// </head>


// <body
//   style="
//     margin:0;
//     padding:0;
//     background:#f5f5f5;
//     font-family:Arial,Helvetica,sans-serif;
//   "
// >


// <div
//   style="
//     max-width:600px;
//     margin:30px auto;
//     background:white;
//     border-radius:12px;
//     overflow:hidden;
//   "
// >


// <!-- HEADER -->

// <div
//   style="
//     background:#f97316;
//     color:white;
//     padding:25px;
//     text-align:center;
//   "
// >

// <h1 style="margin:0;">
//   ⏰ Webinar Reminder
// </h1>

// <p style="margin:10px 0 0;">
//   I TECH AI
// </p>

// </div>


// <!-- CONTENT -->

// <div style="padding:30px;">

// <p>
//   Hello <strong>${escapeHtml(lead.name)}</strong> 👋
// </p>


// <p>

// Your I TECH AI webinar is starting in approximately
// <strong>30 minutes</strong>.

// </p>


// <!-- DETAILS -->

// <div
//   style="
//     background:#fff7ed;
//     padding:18px;
//     border-radius:8px;
//     margin:20px 0;
//   "
// >

// <p>

// 📅
// <strong>
// 8th, 9th & 10th September 2026
// </strong>

// </p>


// <p>

// 🕗
// <strong>
// 8:00 PM – 9:00 PM
// </strong>

// </p>


// <p>

// 💻
// <strong>
// Google Meet
// </strong>

// </p>

// </div>


// <!-- MEET BUTTON -->

// <div
//   style="
//     text-align:center;
//     margin:25px 0;
//   "
// >

// <a
//   href="${WEBINAR_MEETING_LINK}"
//   target="_blank"
//   style="
//     display:inline-block;
//     background:#f97316;
//     color:white;
//     text-decoration:none;
//     padding:15px 28px;
//     border-radius:8px;
//     font-weight:bold;
//   "
// >

// 🎥 JOIN GOOGLE MEET

// </a>

// </div>


// <!-- WHATSAPP BUTTON -->

// <div
//   style="
//     text-align:center;
//     margin:25px 0;
//   "
// >

// <a
//   href="${WHATSAPP_COMMUNITY_LINK}"
//   target="_blank"
//   style="
//     display:inline-block;
//     background:#16a34a;
//     color:white;
//     text-decoration:none;
//     padding:15px 28px;
//     border-radius:8px;
//     font-weight:bold;
//   "
// >

// 💬 JOIN WHATSAPP CHANNEL

// </a>

// </div>


// <p>

// Please join a few minutes before the session starts.

// </p>


// <p>

// See you inside the webinar! 🎓

// </p>


// <p>

// Regards,<br>

// <strong>I TECH AI Team</strong>

// </p>

// </div>


// <!-- FOOTER -->

// <div
//   style="
//     background:#fafafa;
//     padding:20px;
//     text-align:center;
//     color:#777;
//     font-size:13px;
//   "
// >

// © ${new Date().getFullYear()} I TECH AI

// </div>


// </div>

// </body>

// </html>
// `,
//   };


//   await transporter.sendMail(mailOptions);
// }


// /* =========================================================
//    HEALTH CHECK
// ========================================================= */

// // app.get("/", (req, res) => {

// //   res.json({

// //     success: true,

// //     message:
// //       "I TECH AI Webinar Backend is running 🚀",

// //     webinarDates,

// //     webinarMeetingLink:
// //       WEBINAR_MEETING_LINK,

// //     whatsappCommunityLink:
// //       WHATSAPP_COMMUNITY_LINK,

// //   });

// // });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index1.html"));
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


//     /* VALIDATION */

//     if (
//       !name ||
//       !phone ||
//       !email ||
//       !state
//     ) {

//       return res.status(400).json({

//         success: false,

//         message:
//           "Name, phone, email and state are required.",

//       });

//     }


//     /* COMMUNITY VALIDATION */

//     if (communityJoined !== true) {

//       return res.status(400).json({

//         success: false,

//         message:
//           "Please join the WhatsApp Channel before submitting the form.",

//         whatsappCommunityLink:
//           WHATSAPP_COMMUNITY_LINK,

//       });

//     }


//     /* NORMALIZE PHONE */

//     const normalizedPhone =
//       String(phone)
//         .replace(/\D/g, "")
//         .slice(-10);


//     if (
//       normalizedPhone.length !== 10
//     ) {

//       return res.status(400).json({

//         success: false,

//         message:
//           "Please enter a valid 10-digit WhatsApp number.",

//       });

//     }


//     /* CHECK DUPLICATE */

//     const existingLead =
//       await Lead.findOne({
//         phone: normalizedPhone,
//       });


//     if (existingLead) {

//       return res.status(409).json({

//         success: false,

//         message:
//           "This WhatsApp number is already registered for the webinar.",

//         webinarMeetingLink:
//           WEBINAR_MEETING_LINK,

//         whatsappCommunityLink:
//           WHATSAPP_COMMUNITY_LINK,

//       });

//     }


//     /* CREATE LEAD */

//     const lead =
//       new Lead({

//         name:
//           String(name).trim(),

//         phone:
//           normalizedPhone,

//         email:
//           String(email)
//             .trim()
//             .toLowerCase(),

//         state:
//           String(state).trim(),

//         communityJoined:
//           true,

//         communityJoinDate:
//           new Date(),

//         registrationDate:
//           new Date(),

//       });


//     await lead.save();


//     /* SEND REGISTRATION EMAIL */

//     let emailSent = false;


//     try {

//       await sendRegistrationEmail(
//         lead
//       );


//       lead.zoomEmailSent =
//         true;


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


//     /* RESPONSE */

//     return res.status(201).json({

//       success: true,

//       message:
//         emailSent
//           ? "Registration successful! Webinar and WhatsApp links have been sent to your email."
//           : "Registration successful! Webinar and WhatsApp links are ready.",

//       webinarMeetingLink:
//         WEBINAR_MEETING_LINK,

//       whatsappCommunityLink:
//         WHATSAPP_COMMUNITY_LINK,

//       emailSent,

//     });


//   } catch (error) {

//     console.error(
//       "❌ Lead creation error:"
//     );

//     console.error(error);


//     if (
//       error.code === 11000
//     ) {

//       return res.status(409).json({

//         success: false,

//         message:
//           "This WhatsApp number is already registered.",

//         webinarMeetingLink:
//           WEBINAR_MEETING_LINK,

//         whatsappCommunityLink:
//           WHATSAPP_COMMUNITY_LINK,

//       });

//     }


//     return res.status(500).json({

//       success: false,

//       message:
//         "Server error. Please try again later.",

//     });

//   }

// });


// /* =========================================================
//    GET ALL LEADS
// ========================================================= */

// app.get("/api/leads", async (req, res) => {

//   try {

//     const leads =
//       await Lead
//         .find()
//         .sort({
//           registrationDate: -1,
//         })
//         .lean();


//     const total =
//       leads.length;


//     const communityJoined =
//       leads.filter(
//         (lead) =>
//           lead.communityJoined === true
//       ).length;


//     const zoomEmailSent =
//       leads.filter(
//         (lead) =>
//           lead.zoomEmailSent === true
//       ).length;


//     const zoomReminderSent =
//       leads.filter(
//         (lead) =>
//           lead.zoomReminderSent === true
//       ).length;


//     return res.json({

//       success: true,

//       total,

//       communityJoined,

//       zoomEmailSent,

//       zoomReminderSent,

//       webinarMeetingLink:
//         WEBINAR_MEETING_LINK,

//       whatsappCommunityLink:
//         WHATSAPP_COMMUNITY_LINK,

//       data:
//         leads,

//     });


//   } catch (error) {

//     console.error(
//       "❌ Error fetching leads:",
//       error.message
//     );


//     return res.status(500).json({

//       success: false,

//       message:
//         "Unable to fetch leads.",

//     });

//   }

// });


// /* =========================================================
//    GET SINGLE LEAD
// ========================================================= */

// app.get(
//   "/api/leads/:phone",
//   async (req, res) => {

//     try {

//       const normalizedPhone =
//         String(req.params.phone)
//           .replace(/\D/g, "")
//           .slice(-10);


//       const lead =
//         await Lead
//           .findOne({
//             phone:
//               normalizedPhone,
//           })
//           .lean();


//       if (!lead) {

//         return res.status(404).json({

//           success: false,

//           message:
//             "Lead not found.",

//         });

//       }


//       return res.json({

//         success: true,

//         webinarMeetingLink:
//           WEBINAR_MEETING_LINK,

//         whatsappCommunityLink:
//           WHATSAPP_COMMUNITY_LINK,

//         data:
//           lead,

//       });


//     } catch (error) {

//       console.error(
//         "❌ Error fetching lead:",
//         error.message
//       );


//       return res.status(500).json({

//         success: false,

//         message:
//           "Server error.",

//       });

//     }

//   }
// );


// /* =========================================================
//    TEST EMAIL
// ========================================================= */

// app.post(
//   "/api/test-email",
//   async (req, res) => {

//     try {

//       const {
//         email
//       } = req.body;


//       if (!email) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Email is required.",

//         });

//       }


//       const testLead = {

//         name:
//           "Test User",

//         email,

//       };


//       await sendRegistrationEmail(
//         testLead
//       );


//       return res.json({

//         success: true,

//         message:
//           "Test email sent successfully.",

//       });


//     } catch (error) {

//       console.error(
//         "❌ Test email failed:",
//         error.message
//       );


//       return res.status(500).json({

//         success: false,

//         message:
//           "Test email failed.",

//         error:
//           error.message,

//       });

//     }

//   }
// );


// /* =========================================================
//    REMINDER SCHEDULER
// ========================================================= */

// async function checkAndSendReminders() {

//   try {

//     const now =
//       new Date();


//     for (
//       const webinarDateString
//       of webinarDates
//     ) {

//       const webinarDate =
//         new Date(
//           webinarDateString
//         );


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
//        * Reminder window:
//        * 1 minute
//        */

//       if (
//         currentDifference <=
//         60 * 1000
//       ) {

//         console.log(
//           `⏰ Reminder window reached for ${webinarDateString}`
//         );


//         /*
//          * IMPORTANT:
//          * Only send reminder to users
//          * who have not received it yet.
//          */

//         const leads =
//           await Lead.find({

//             zoomEmailSent:
//               true,

//             zoomReminderSent:
//               false,

//           });


//         console.log(
//           `📧 Sending reminders to ${leads.length} users`
//         );


//         for (
//           const lead
//           of leads
//         ) {

//           try {

//             await sendReminderEmail(
//               lead
//             );


//             lead.zoomReminderSent =
//               true;


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

// app.listen(
//   PORT,
//   () => {

//     console.log("");

//     console.log(
//       "======================================"
//     );

//     console.log(
//       "🚀 I TECH AI WEBINAR BACKEND"
//     );

//     console.log(
//       "======================================"
//     );

//     console.log(
//       `🌐 Server: http://localhost:${PORT}`
//     );

//     console.log(
//       `📋 Leads: http://localhost:${PORT}/api/leads`
//     );

//     console.log(
//       "📧 Email system: enabled"
//     );

//     console.log(
//       `🎥 Google Meet: ${WEBINAR_MEETING_LINK}`
//     );

//     console.log(
//       `💬 WhatsApp Channel: ${WHATSAPP_COMMUNITY_LINK}`
//     );

//     console.log(
//       "⏰ Reminder scheduler: running"
//     );

//     console.log(
//       "======================================"
//     );

//     console.log("");

//     verifyEmailConfiguration();

//   }
// );
// // document.addEventListener("DOMContentLoaded", function () {

// //     const faqQuestions = document.querySelectorAll(".faq-question");

// //     faqQuestions.forEach(function (question) {

// //         question.addEventListener("click", function () {

// //             const currentItem = this.closest(".faq-item");

// //             document.querySelectorAll(".faq-item").forEach(function (item) {

// //                 if (item !== currentItem) {
// //                     item.classList.remove("active");
// //                 }

// //             });

// //             currentItem.classList.toggle("active");

// //         });

// //     });

// // });


const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
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
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

/* =========================================================
   CONFIGURATION
========================================================= */

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

/*
   GOOGLE SHEETS
   GOOGLE_SHEET_ID = Sheet URL ke /d/ aur /edit ke beech wala ID

   Example:
   https://docs.google.com/spreadsheets/d/ABC123XYZ/edit

   GOOGLE_SHEET_ID:
   ABC123XYZ
*/

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

/*
   Service account credentials ke liye Render me:
   GOOGLE_SERVICE_ACCOUNT_EMAIL
   GOOGLE_PRIVATE_KEY

   Private key ko Render environment variable me ek line me paste karna hai.
*/

const GOOGLE_SERVICE_ACCOUNT_EMAIL =
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  : null;

/* =========================================================
   WEBINAR CONFIG
========================================================= */

const WEBINAR_MEETING_LINK =
  "https://meet.google.com/uca-deoe-vnh?hs=151";

const WHATSAPP_COMMUNITY_LINK =
  "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";

/* =========================================================
   WEBINAR DATES
========================================================= */

const webinarDates = [
  "2026-09-08T20:00:00+05:30",
  "2026-09-09T20:00:00+05:30",
  "2026-09-10T20:00:00+05:30",
];

/* =========================================================
   ENV CHECK
========================================================= */

console.log("\n========================================");
console.log("       I TECH AI WEBINAR BACKEND");
console.log("========================================");

console.log(
  "MONGO_URI:",
  MONGO_URI ? "✅ Loaded" : "❌ Missing"
);

console.log(
  "EMAIL_USER:",
  EMAIL_USER ? "✅ Loaded" : "❌ Missing"
);

console.log(
  "EMAIL_PASS:",
  EMAIL_PASS ? "✅ Loaded" : "❌ Missing"
);

console.log(
  "GOOGLE_SHEET_ID:",
  GOOGLE_SHEET_ID ? "✅ Loaded" : "❌ Missing"
);

console.log(
  "GOOGLE_SERVICE_ACCOUNT_EMAIL:",
  GOOGLE_SERVICE_ACCOUNT_EMAIL ? "✅ Loaded" : "❌ Missing"
);

console.log(
  "GOOGLE_PRIVATE_KEY:",
  GOOGLE_PRIVATE_KEY ? "✅ Loaded" : "❌ Missing"
);

console.log("========================================\n");

/* =========================================================
   MONGODB CONNECTION
========================================================= */

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing.");
} else {
  mongoose
    .connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    })
    .then(() => {
      console.log("========================================");
      console.log("✅ MONGODB CONNECTED");
      console.log("📦 Database:", mongoose.connection.name);
      console.log("🖥️ Host:", mongoose.connection.host);
      console.log("========================================");
    })
    .catch((error) => {
      console.error("❌ MongoDB connection error:");
      console.error(error.message);
    });
}

mongoose.connection.on("connected", () => {
  console.log("🟢 MongoDB connection established");
});

mongoose.connection.on("error", (error) => {
  console.error("🔴 MongoDB error:", error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 MongoDB disconnected");
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
      lowercase: true,
      trim: true,
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
   NODEMAILER
========================================================= */

let transporter = null;

if (EMAIL_USER && EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },

    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/* =========================================================
   EMAIL VERIFICATION
========================================================= */

async function verifyEmailConfiguration() {
  if (!transporter) {
    console.log("⚠️ Email transporter not configured.");
    return;
  }

  try {
    await transporter.verify();

    console.log("========================================");
    console.log("✅ EMAIL SERVICE READY");
    console.log("📧 Email:", EMAIL_USER);
    console.log("========================================");
  } catch (error) {
    console.error("========================================");
    console.error("❌ EMAIL SERVICE ERROR");
    console.error(error.message);
    console.error("========================================");
  }
}

/* =========================================================
   REGISTRATION EMAIL
========================================================= */

async function sendRegistrationEmail(lead) {
  if (!transporter) {
    throw new Error("Email transporter is not configured.");
  }

  const mailOptions = {
    from: `"I TECH AI" <${EMAIL_USER}>`,
    to: lead.email,
    subject: "🎉 Your I TECH AI Webinar Registration is Confirmed",

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: auto;
        padding: 25px;
        border: 1px solid #ddd;
        border-radius: 12px;
      ">

        <h2 style="margin-bottom:10px;">
          🎉 Registration Successful!
        </h2>

        <p>Hi <strong>${lead.name}</strong>,</p>

        <p>
          Your registration for the
          <strong>I TECH AI Webinar</strong>
          has been successfully completed.
        </p>

        <div style="
          background:#f5f5f5;
          padding:15px;
          border-radius:10px;
          margin:20px 0;
        ">

          <p>
            <strong>Name:</strong> ${lead.name}
          </p>

          <p>
            <strong>Email:</strong> ${lead.email}
          </p>

          <p>
            <strong>Phone:</strong> ${lead.phone}
          </p>

          <p>
            <strong>State:</strong> ${lead.state}
          </p>

        </div>

        <p>
          Join the webinar using the link below:
        </p>

        <a
          href="${WEBINAR_MEETING_LINK}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#111;
            color:white;
            text-decoration:none;
            border-radius:8px;
          "
        >
          🚀 Join Webinar
        </a>

        <br><br>

        <a
          href="${WHATSAPP_COMMUNITY_LINK}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#25D366;
            color:white;
            text-decoration:none;
            border-radius:8px;
          "
        >
          💬 Join WhatsApp Channel
        </a>

        <p style="margin-top:25px;">
          See you in the webinar! 🚀
        </p>

        <p>
          <strong>I TECH AI Team</strong>
        </p>

      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log(
    `📧 Registration email sent to ${lead.email}`
  );

  return info;
}

/* =========================================================
   GOOGLE SHEETS AUTH
========================================================= */

let sheets = null;

function initializeGoogleSheets() {
  if (
    !GOOGLE_SHEET_ID ||
    !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !GOOGLE_PRIVATE_KEY
  ) {
    console.log(
      "⚠️ Google Sheets is not fully configured."
    );

    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },

      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    sheets = google.sheets({
      version: "v4",
      auth,
    });

    console.log("========================================");
    console.log("✅ GOOGLE SHEETS SERVICE READY");
    console.log("📊 Sheet ID:", GOOGLE_SHEET_ID);
    console.log("========================================");
  } catch (error) {
    console.error(
      "❌ Google Sheets initialization error:",
      error.message
    );
  }
}

initializeGoogleSheets();

/* =========================================================
   ADD LEAD TO GOOGLE SHEET
========================================================= */

async function addLeadToGoogleSheet(lead) {
  if (!sheets || !GOOGLE_SHEET_ID) {
    throw new Error(
      "Google Sheets is not configured."
    );
  }

  /*
    Sheet ke first tab ka naam normally Sheet1 hota hai.

    Hum A:H columns me data add karenge.
  */

  const values = [
    [
      lead.name,
      lead.phone,
      lead.email,
      lead.state,
      lead.communityJoined ? "Yes" : "No",
      lead.registrationDate
        ? new Date(lead.registrationDate).toLocaleString(
            "en-IN",
            {
              timeZone: "Asia/Kolkata",
            }
          )
        : "",
      lead.zoomEmailSent ? "Yes" : "No",
      lead.zoomReminderSent ? "Yes" : "No",
    ],
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,

    range: "Sheet1!A:H",

    valueInputOption: "USER_ENTERED",

    insertDataOption: "INSERT_ROWS",

    requestBody: {
      values,
    },
  });

  console.log("========================================");
  console.log("✅ GOOGLE SHEET UPDATED");
  console.log("👤 Lead:", lead.name);
  console.log("📧 Email:", lead.email);
  console.log(
    "📊 Updated range:",
    response.data.updates?.updatedRange
  );
  console.log("========================================");

  return response;
}

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/health", (req, res) => {
  res.json({
    success: true,

    server: "I TECH AI Webinar Backend",

    mongodb: {
      connected:
        mongoose.connection.readyState === 1,

      database:
        mongoose.connection.name || null,
    },

    email: {
      configured:
        Boolean(EMAIL_USER && EMAIL_PASS),

      serviceReady:
        Boolean(transporter),
    },

    googleSheets: {
      configured:
        Boolean(
          GOOGLE_SHEET_ID &&
            GOOGLE_SERVICE_ACCOUNT_EMAIL &&
            GOOGLE_PRIVATE_KEY
        ),

      sheetId:
        GOOGLE_SHEET_ID
          ? "configured"
          : null,
    },

    webinarDates,

    webinarMeetingLink:
      WEBINAR_MEETING_LINK,

    whatsappCommunityLink:
      WHATSAPP_COMMUNITY_LINK,
  });
});

/* =========================================================
   ROOT ROUTE
========================================================= */

app.get("/", (req, res) => {
  const filePath = path.join(
    __dirname,
    "index1.html"
  );

  res.sendFile(filePath, (error) => {
    if (error) {
      console.error(
        "❌ Could not load index1.html:",
        error.message
      );

      res.status(404).send(
        "index1.html not found."
      );
    }
  });
});

/* =========================================================
   POST /api/leads
========================================================= */

app.post("/api/leads", async (req, res) => {
  try {
    console.log("\n========================================");
    console.log("📥 NEW LEAD REQUEST");
    console.log("========================================");

    const {
      name,
      phone,
      email,
      state,
      communityJoined,
    } = req.body;

    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

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

    if (communityJoined !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please confirm that you joined the community.",
      });
    }

    /* -----------------------------------------
       MONGODB CHECK
    ----------------------------------------- */

    if (mongoose.connection.readyState !== 1) {
      console.error(
        "❌ MongoDB is not connected."
      );

      return res.status(503).json({
        success: false,
        message:
          "Database is currently unavailable. Please try again.",
      });
    }

    /* -----------------------------------------
       NORMALIZE PHONE
    ----------------------------------------- */

    const normalizedPhone = String(phone)
      .replace(/\D/g, "")
      .slice(-10);

    if (normalizedPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid 10 digit phone number.",
      });
    }

    /* -----------------------------------------
       DUPLICATE CHECK
    ----------------------------------------- */

    const existingLead =
      await Lead.findOne({
        phone: normalizedPhone,
      });

    if (existingLead) {
      console.log(
        "⚠️ Duplicate lead:",
        normalizedPhone
      );

      return res.status(409).json({
        success: false,
        message:
          "This phone number is already registered.",
      });
    }

    /* -----------------------------------------
       CREATE LEAD
    ----------------------------------------- */

    const lead = new Lead({
      name: String(name).trim(),

      phone: normalizedPhone,

      email: String(email)
        .trim()
        .toLowerCase(),

      state: String(state).trim(),

      communityJoined: true,

      communityJoinDate: new Date(),

      registrationDate: new Date(),
    });

    /* -----------------------------------------
       SAVE TO MONGODB
    ----------------------------------------- */

    console.log(
      "💾 Saving lead to MongoDB..."
    );

    await lead.save();

    console.log("========================================");
    console.log("✅ LEAD SAVED");
    console.log("👤 Name:", lead.name);
    console.log("📱 Phone:", lead.phone);
    console.log("📧 Email:", lead.email);
    console.log(
      "📦 Database:",
      mongoose.connection.name
    );
    console.log("========================================");

    /* -----------------------------------------
       GOOGLE SHEET BACKGROUND SYNC
    ----------------------------------------- */

    addLeadToGoogleSheet(lead)
      .catch((error) => {
        console.error(
          "❌ GOOGLE SHEET SYNC FAILED"
        );

        console.error(error.message);
      });

    /* -----------------------------------------
       EMAIL BACKGROUND SEND
    ----------------------------------------- */

    sendRegistrationEmail(lead)
      .then(async () => {
        try {
          await Lead.updateOne(
            {
              _id: lead._id,
            },
            {
              $set: {
                zoomEmailSent: true,
              },
            }
          );

          console.log(
            `✅ Email status updated for ${lead.email}`
          );
        } catch (error) {
          console.error(
            "❌ Could not update email status:",
            error.message
          );
        }
      })
      .catch((error) => {
        console.error(
          "❌ REGISTRATION EMAIL FAILED"
        );

        console.error(error.message);
      });

    /* -----------------------------------------
       RESPONSE
    ----------------------------------------- */

    return res.status(201).json({
      success: true,

      message:
        "Registration successful! Webinar and WhatsApp links are ready.",

      webinarMeetingLink:
        WEBINAR_MEETING_LINK,

      whatsappCommunityLink:
        WHATSAPP_COMMUNITY_LINK,

      emailSent: false,

      googleSheetSync:
        Boolean(sheets && GOOGLE_SHEET_ID),
    });
  } catch (error) {
    console.error(
      "❌ LEAD REGISTRATION ERROR"
    );

    console.error(error);

    /* -----------------------------------------
       DUPLICATE KEY ERROR
    ----------------------------------------- */

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message:
          "This phone number is already registered.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Registration failed. Please try again.",
    });
  }
});

/* =========================================================
   GET ALL LEADS
========================================================= */

app.get("/api/leads", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message:
          "Database is not connected.",
      });
    }

    const leads = await Lead.find()
      .sort({
        createdAt: -1,
      })
      .lean();

    res.json({
      success: true,

      database:
        mongoose.connection.name,

      count: leads.length,

      leads,
    });
  } catch (error) {
    console.error(
      "❌ GET LEADS ERROR:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch leads.",
    });
  }
});

/* =========================================================
   GET LEAD BY PHONE
========================================================= */

app.get(
  "/api/leads/:phone",
  async (req, res) => {
    try {
      if (
        mongoose.connection.readyState !== 1
      ) {
        return res.status(503).json({
          success: false,
          message:
            "Database is not connected.",
        });
      }

      const normalizedPhone =
        String(req.params.phone)
          .replace(/\D/g, "")
          .slice(-10);

      const lead = await Lead.findOne({
        phone: normalizedPhone,
      }).lean();

      if (!lead) {
        return res.status(404).json({
          success: false,
          message: "Lead not found.",
        });
      }

      res.json({
        success: true,
        lead,
      });
    } catch (error) {
      console.error(
        "❌ GET LEAD ERROR:",
        error.message
      );

      res.status(500).json({
        success: false,
        message:
          "Unable to fetch lead.",
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
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message:
            "Test email address is required.",
        });
      }

      if (!transporter) {
        return res.status(500).json({
          success: false,
          message:
            "Email transporter is not configured.",
        });
      }

      console.log(
        `📧 Sending test email to ${email}`
      );

      const info =
        await transporter.sendMail({
          from: `"I TECH AI" <${EMAIL_USER}>`,
          to: email,
          subject:
            "I TECH AI Test Email",

          html: `
            <h2>✅ Email Working</h2>

            <p>
              This is a test email from
              I TECH AI Webinar Backend.
            </p>
          `,
        });

      res.json({
        success: true,

        message:
          "Test email sent successfully.",

        messageId:
          info.messageId,
      });
    } catch (error) {
      console.error(
        "❌ TEST EMAIL ERROR"
      );

      console.error(error);

      res.status(500).json({
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
   REMINDER EMAIL
========================================================= */

async function sendReminderEmail(lead) {
  if (!transporter) {
    throw new Error(
      "Email transporter is not configured."
    );
  }

  await transporter.sendMail({
    from: `"I TECH AI" <${EMAIL_USER}>`,
    to: lead.email,

    subject:
      "⏰ I TECH AI Webinar Reminder",

    html: `
      <div style="
        font-family:Arial,sans-serif;
        max-width:650px;
        margin:auto;
        padding:25px;
      ">

        <h2>
          ⏰ Webinar Reminder
        </h2>

        <p>
          Hi <strong>${lead.name}</strong>,
        </p>

        <p>
          Your I TECH AI webinar is starting soon.
        </p>

        <a
          href="${WEBINAR_MEETING_LINK}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#111;
            color:white;
            text-decoration:none;
            border-radius:8px;
          "
        >
          🚀 Join Webinar
        </a>

      </div>
    `,
  });
}

/* =========================================================
   REMINDER SCHEDULER
========================================================= */

setInterval(
  async () => {
    try {
      if (
        mongoose.connection.readyState !== 1
      ) {
        return;
      }

      const now = new Date();

      /*
        Reminder approximately 30 minutes before
        webinar.
      */

      for (const webinarDate of webinarDates) {
        const webinarTime =
          new Date(webinarDate);

        const difference =
          webinarTime.getTime() -
          now.getTime();

        const thirtyMinutes =
          30 * 60 * 1000;

        const fiveMinutes =
          5 * 60 * 1000;

        if (
          difference <= thirtyMinutes &&
          difference >= fiveMinutes
        ) {
          const leads = await Lead.find({
            zoomReminderSent: false,
            zoomEmailSent: true,
          });

          for (const lead of leads) {
            try {
              await sendReminderEmail(lead);

              lead.zoomReminderSent = true;

              await lead.save();

              console.log(
                `🔔 Reminder sent to ${lead.email}`
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
  },
  60 * 1000
);

/* =========================================================
   404 API HANDLER
========================================================= */

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
  });
});

/* =========================================================
   GLOBAL ERROR HANDLER
========================================================= */

app.use(
  (
    error,
    req,
    res,
    next
  ) => {
    console.error(
      "❌ GLOBAL ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Internal server error.",
    });
  }
);

/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, async () => {
  console.log("\n========================================");
  console.log(
    `🚀 Server running on port ${PORT}`
  );
  console.log(
    `🏠 Local: http://localhost:${PORT}`
  );
  console.log(
    `❤️ Health: http://localhost:${PORT}/health`
  );
  console.log("========================================");

  console.log(
    "🔗 Webinar:",
    WEBINAR_MEETING_LINK
  );

  console.log(
    "💬 WhatsApp:",
    WHATSAPP_COMMUNITY_LINK
  );

  console.log("========================================\n");

  await verifyEmailConfiguration();
});