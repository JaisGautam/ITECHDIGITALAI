// // // // // // // // // // const express = require('express');
// // // // // // // // // // const mongoose = require('mongoose');
// // // // // // // // // // const cors = require('cors');

// // // // // // // // // // const app =express();
// // // // // // // // // // app.use(express.json());
// // // // // // // // // // app.use(cors());

// // // // // // // // // // // Aapka MongoDB Connection String aur Database Name ('landing page')
// // // // // // // // // // const MONGO_URI = "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // // // // // mongoose.connect(MONGO_URI)
// // // // // // // // // //   .then(() => console.log('MongoDB Connected Successfully to Database: landing page'))
// // // // // // // // // //   .catch(err => console.error('MongoDB Connection Error:', err));

// // // // // // // // // // // Mongoose Schema aur Model
// // // // // // // // // // const leadSchema = new mongoose.Schema({
// // // // // // // // // //     name: { type: String, required: true },
// // // // // // // // // //     phone: { type: String, required: true },
// // // // // // // // // //     date: { type: Date, default: Date.now }
// // // // // // // // // // });

// // // // // // // // // // const Lead = mongoose.model('Lead', leadSchema);

// // // // // // // // // // // API Route for Form Submission
// // // // // // // // // // app.post('/api/leads', async (req, res) => {
// // // // // // // // // //     try {
// // // // // // // // // //         const { name, phone } = req.body;
// // // // // // // // // //         const newLead = new Lead({ name, phone });
// // // // // // // // // //         await newLead.save();
// // // // // // // // // //         res.status(201).json({ success: true, message: 'Data saved successfully' });
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //         console.error(error);
// // // // // // // // // //         res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // // // // //     }
// // // // // // // // // // });

// // // // // // // // // // const PORT = 5000;
// // // // // // // // // // app.listen(PORT, () => {
// // // // // // // // // //     console.log(`Server is running on port ${PORT}`);
// // // // // // // // // // });


    
        
        
// // // // // // // // //         const express = require('express');
// // // // // // // // //         const mongoose = require('mongoose');
// // // // // // // // //         const cors = require('cors');
// // // // // // // // //         require('dotenv').config();

// // // // // // // // //         const app = express();
// // // // // // // // //         app.use(express.json());
// // // // // // // // //         app.use(cors());

// // // // // // // // //         // MongoDB Connection String (from .env)
// // // // // // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // // // //         mongoose.connect(MONGO_URI)
// // // // // // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // // // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // // // // // //         // Schema & Model (with email & state)
// // // // // // // // //         const leadSchema = new mongoose.Schema({
// // // // // // // // //             name: { type: String, required: true },
// // // // // // // // //             phone: { type: String, required: true },
// // // // // // // // //             email: { type: String, required: true },
// // // // // // // // //             state: { type: String, required: true },
// // // // // // // // //             date: { type: Date, default: Date.now }
// // // // // // // // //         });

// // // // // // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // // // // // //         // API Route
// // // // // // // // //         app.post('/api/leads', async (req, res) => {
// // // // // // // // //             try {
// // // // // // // // //                 const { name, phone, email, state } = req.body;
// // // // // // // // //                 if (!name || !phone || !email || !state) {
// // // // // // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // // // // // //                 }
// // // // // // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // // // // // //                 await newLead.save();
// // // // // // // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // // // // // // //             } catch (error) {
// // // // // // // // //                 console.error(error);
// // // // // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // // // //             }
// // // // // // // // //         });

// // // // // // // // //         const PORT = process.env.PORT || 5000;
// // // // // // // // //         app.listen(PORT, () => {
// // // // // // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // // // // // //         });

    


 
// // // // // // // //         const express = require('express');
// // // // // // // //         const mongoose = require('mongoose');
// // // // // // // //         const cors = require('cors');
// // // // // // // //         require('dotenv').config();

// // // // // // // //         const app = express();
// // // // // // // //         app.use(express.json());
// // // // // // // //         app.use(cors());

// // // // // // // //         // MongoDB Connection String (from .env)
// // // // // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // // // //         mongoose.connect(MONGO_URI)
// // // // // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // // // // //         // Schema & Model (with email & state)
// // // // // // // //         const leadSchema = new mongoose.Schema({
// // // // // // // //             name: { type: String, required: true },
// // // // // // // //             phone: { type: String, required: true },
// // // // // // // //             email: { type: String, required: true },
// // // // // // // //             state: { type: String, required: true },
// // // // // // // //             date: { type: Date, default: Date.now }
// // // // // // // //         });

// // // // // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // // // // //         // API Route
// // // // // // // //         app.post('/api/leads', async (req, res) => {
// // // // // // // //             try {
// // // // // // // //                 const { name, phone, email, state } = req.body;
// // // // // // // //                 if (!name || !phone || !email || !state) {
// // // // // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // // // // //                 }
// // // // // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // // // // //                 await newLead.save();
// // // // // // // //                 res.status(201).json({ success: true, message: 'Lead saved' });
// // // // // // // //             } catch (error) {
// // // // // // // //                 console.error(error);
// // // // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // // // //             }
// // // // // // // //         });

// // // // // // // //         const PORT = process.env.PORT || 5000;
// // // // // // // //         app.listen(PORT, () => {
// // // // // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // // // // //         });

     
    
// // // // // // //  const express = require('express');
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

// // // // // //         const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://gautamjais574:Amit123456789@cluster0.m1k5sz6.mongodb.net/landing_page?retryWrites=true&w=majority&appName=Cluster0";

// // // // // //         mongoose.connect(MONGO_URI)
// // // // // //             .then(() => console.log('✅ MongoDB Connected to: landing_page'))
// // // // // //             .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // // // // //         // Schema with payment status
// // // // // //         const leadSchema = new mongoose.Schema({
// // // // // //             name: { type: String, required: true },
// // // // // //             phone: { type: String, required: true, unique: true },
// // // // // //             email: { type: String, required: true },
// // // // // //             state: { type: String, required: true },
// // // // // //             paymentStatus: { type: String, default: 'pending' }, // pending, completed
// // // // // //             paymentDate: { type: Date },
// // // // // //             date: { type: Date, default: Date.now }
// // // // // //         });

// // // // // //         const Lead = mongoose.model('Lead', leadSchema);

// // // // // //         // POST - Save lead
// // // // // //         app.post('/api/leads', async (req, res) => {
// // // // // //             try {
// // // // // //                 const { name, phone, email, state } = req.body;
// // // // // //                 if (!name || !phone || !email || !state) {
// // // // // //                     return res.status(400).json({ success: false, message: 'Missing fields' });
// // // // // //                 }
                
// // // // // //                 // Check if lead already exists
// // // // // //                 let lead = await Lead.findOne({ phone });
// // // // // //                 if (lead) {
// // // // // //                     return res.status(400).json({ success: false, message: 'This number is already registered' });
// // // // // //                 }
                
// // // // // //                 const newLead = new Lead({ name, phone, email, state });
// // // // // //                 await newLead.save();
// // // // // //                 res.status(201).json({ success: true, message: 'Lead saved', data: newLead });
// // // // // //             } catch (error) {
// // // // // //                 console.error(error);
// // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // //             }
// // // // // //         });

// // // // // //         // PUT - Update payment status
// // // // // //         app.put('/api/leads/payment', async (req, res) => {
// // // // // //             try {
// // // // // //                 const { phone, paymentStatus } = req.body;
// // // // // //                 if (!phone) {
// // // // // //                     return res.status(400).json({ success: false, message: 'Phone number required' });
// // // // // //                 }
                
// // // // // //                 const lead = await Lead.findOne({ phone });
// // // // // //                 if (!lead) {
// // // // // //                     return res.status(404).json({ success: false, message: 'Lead not found' });
// // // // // //                 }
                
// // // // // //                 lead.paymentStatus = paymentStatus || 'completed';
// // // // // //                 lead.paymentDate = new Date();
// // // // // //                 await lead.save();
                
// // // // // //                 res.json({ success: true, message: 'Payment status updated', data: lead });
// // // // // //             } catch (error) {
// // // // // //                 console.error(error);
// // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // //             }
// // // // // //         });

// // // // // //         // POST - Save payment to Google Sheet (via webhook)
// // // // // //         app.post('/api/leads/payment-sheet', async (req, res) => {
// // // // // //             try {
// // // // // //                 const { name, phone, email, state, paymentStatus, paymentDate } = req.body;
                
// // // // // //                 // Here you can integrate with Google Sheets API
// // // // // //                 // For now, we'll just log and save to MongoDB
// // // // // //                 console.log('📊 Payment recorded for:', { name, phone, email, state, paymentStatus, paymentDate });
                
// // // // // //                 // You can add Google Sheets integration here
// // // // // //                 // const sheetUrl = 'YOUR_GOOGLE_SHEET_WEBHOOK_URL';
// // // // // //                 // await fetch(sheetUrl, { method: 'POST', body: JSON.stringify(req.body) });
                
// // // // // //                 res.json({ success: true, message: 'Payment recorded successfully' });
// // // // // //             } catch (error) {
// // // // // //                 console.error(error);
// // // // // //                 res.status(500).json({ success: false, message: 'Server Error' });
// // // // // //             }
// // // // // //         });

// // // // // //         // GET - Get all leads with payment status (for admin)
// // // // // //         app.get('/api/leads', async (req, res) => {
// // // // // //             try {
// // // // // //                 const leads = await Lead.find().sort({ date: -1 });
// // // // // //                 const total = leads.length;
// // // // // //                 const paid = leads.filter(l => l.paymentStatus === 'completed').length;
// // // // // //                 const pending = total - paid;
                
// // // // // //                 res.json({ 
// // // // // //                     success: true, 
// // // // // //                     total,
// // // // // //                     paid,
// // // // // //                     pending,
// // // // // //                     data: leads 
// // // // // //                 });
// // // // // //             } catch (error) {
// // // // // //                 // res.status(500).json({ success: false, message: error.message });
// // // // // //             }
// // // // // //         });

// // // // // //         const PORT = process.env.PORT || 5000;
// // // // // //         app.listen(PORT, () => {
// // // // // //             console.log(`🚀 Server running on port ${PORT}`);
// // // // // //         });
    

// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const nodemailer = require("nodemailer");
// // // // // require("dotenv").config();

// // // // // const app = express();

// // // // // app.use(cors());
// // // // // app.use(express.json());


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | CONFIGURATION
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // const PORT = process.env.PORT || 5000;

// // // // // const MONGO_URI = process.env.MONGO_URI;

// // // // // const EMAIL_USER = process.env.EMAIL_USER;

// // // // // const EMAIL_PASS = process.env.EMAIL_PASS;

// // // // // const ZOOM_MEETING_LINK =
// // // // //     process.env.ZOOM_MEETING_LINK ||
// // // // //     "https://zoom.us/j/YOUR_MEETING_ID";

// // // // // const WHATSAPP_COMMUNITY_LINK =
// // // // //     process.env.WHATSAPP_COMMUNITY_LINK ||
// // // // //     "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK";


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | VALIDATE ENVIRONMENT
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // if (!MONGO_URI) {

// // // // //     console.error(
// // // // //         "❌ MONGO_URI is missing in .env"
// // // // //     );

// // // // // }

// // // // // if (!EMAIL_USER || !EMAIL_PASS) {

// // // // //     console.warn(
// // // // //         "⚠️ EMAIL_USER or EMAIL_PASS is missing."
// // // // //     );

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | MONGODB CONNECTION
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // mongoose
// // // // //     .connect(MONGO_URI)
// // // // //     .then(() => {

// // // // //         console.log(
// // // // //             "✅ MongoDB Connected"
// // // // //         );

// // // // //     })
// // // // //     .catch((error) => {

// // // // //         console.error(
// // // // //             "❌ MongoDB Connection Error:",
// // // // //             error.message
// // // // //         );

// // // // //     });


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | LEAD SCHEMA
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // const leadSchema =
// // // // //     new mongoose.Schema({

// // // // //         name: {
// // // // //             type: String,
// // // // //             required: true,
// // // // //             trim: true
// // // // //         },

// // // // //         phone: {
// // // // //             type: String,
// // // // //             required: true,
// // // // //             unique: true,
// // // // //             trim: true
// // // // //         },

// // // // //         email: {
// // // // //             type: String,
// // // // //             required: true,
// // // // //             trim: true,
// // // // //             lowercase: true
// // // // //         },

// // // // //         state: {
// // // // //             type: String,
// // // // //             required: true,
// // // // //             trim: true
// // // // //         },

// // // // //         communityJoined: {
// // // // //             type: Boolean,
// // // // //             default: false
// // // // //         },

// // // // //         communityJoinDate: {
// // // // //             type: Date
// // // // //         },

// // // // //         zoomEmailSent: {
// // // // //             type: Boolean,
// // // // //             default: false
// // // // //         },

// // // // //         zoomReminderSent: {
// // // // //             type: Boolean,
// // // // //             default: false
// // // // //         },

// // // // //         registrationDate: {
// // // // //             type: Date,
// // // // //             default: Date.now
// // // // //         }

// // // // //     });


// // // // // const Lead =
// // // // //     mongoose.model(
// // // // //         "Lead",
// // // // //         leadSchema
// // // // //     );


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | EMAIL TRANSPORTER
// // // // // |--------------------------------------------------------------------------
// // // // // |
// // // // // | For Gmail use:
// // // // // |
// // // // // | EMAIL_USER=yourgmail@gmail.com
// // // // // | EMAIL_PASS=your 16 digit Gmail App Password
// // // // // |
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // let transporter = null;


// // // // // if (EMAIL_USER && EMAIL_PASS) {

// // // // //     transporter =
// // // // //         nodemailer.createTransport({

// // // // //             service: "gmail",

// // // // //             auth: {
// // // // //                 user: EMAIL_USER,
// // // // //                 pass: EMAIL_PASS
// // // // //             }

// // // // //         });

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | WEBINAR DATES
// // // // // |--------------------------------------------------------------------------
// // // // // |
// // // // // | India timezone: Asia/Kolkata (+05:30)
// // // // // |
// // // // // */

// // // // // const WEBINAR_DATES = [

// // // // //     "2026-09-08T20:00:00+05:30",

// // // // //     "2026-09-09T20:00:00+05:30",

// // // // //     "2026-09-10T20:00:00+05:30"

// // // // // ];


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | EMAIL - REGISTRATION CONFIRMATION
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // async function sendRegistrationEmail(lead) {

// // // // //     if (!transporter) {

// // // // //         console.warn(
// // // // //             "⚠️ Email transporter not configured."
// // // // //         );

// // // // //         return false;

// // // // //     }


// // // // //     const mailOptions = {

// // // // //         from: `"I TECH AI" <${EMAIL_USER}>`,

// // // // //         to: lead.email,

// // // // //         subject:
// // // // //             "🎉 Your Webinar Registration is Confirmed | I TECH AI",

// // // // //         html: `

// // // // // <!DOCTYPE html>

// // // // // <html>

// // // // // <head>

// // // // // <meta charset="UTF-8">

// // // // // </head>

// // // // // <body style="
// // // // //     margin:0;
// // // // //     padding:0;
// // // // //     background:#f5f5f5;
// // // // //     font-family:Arial,sans-serif;
// // // // // ">

// // // // // <div style="
// // // // //     max-width:600px;
// // // // //     margin:30px auto;
// // // // //     background:#ffffff;
// // // // //     border-radius:12px;
// // // // //     overflow:hidden;
// // // // // ">

// // // // // <div style="
// // // // //     background:#d35400;
// // // // //     color:#ffffff;
// // // // //     padding:25px;
// // // // //     text-align:center;
// // // // // ">

// // // // // <h1 style="margin:0;">
// // // // //     I TECH AI
// // // // // </h1>

// // // // // <p style="margin:8px 0 0;">
// // // // //     Webinar Registration
// // // // // </p>

// // // // // </div>


// // // // // <div style="
// // // // //     padding:30px;
// // // // // ">

// // // // // <h2>
// // // // //     Hello ${escapeHtml(lead.name)} 👋
// // // // // </h2>


// // // // // <p style="
// // // // //     color:#555;
// // // // //     line-height:1.7;
// // // // // ">

// // // // // Your registration for the I TECH AI webinar
// // // // // has been successfully confirmed.

// // // // // </p>


// // // // // <div style="
// // // // //     background:#fff3e2;
// // // // //     padding:20px;
// // // // //     border-radius:10px;
// // // // //     margin:20px 0;
// // // // // ">

// // // // // <h3 style="
// // // // //     margin-top:0;
// // // // //     color:#d35400;
// // // // // ">

// // // // // 📅 Webinar Details

// // // // // </h3>

// // // // // <p>
// // // // // <strong>Date:</strong>
// // // // // 8th, 9th & 10th September 2026
// // // // // </p>

// // // // // <p>
// // // // // <strong>Time:</strong>
// // // // // 8:00 PM – 9:00 PM
// // // // // </p>

// // // // // <p>
// // // // // <strong>Speaker:</strong>
// // // // // Acharya Pankaj Ji
// // // // // </p>

// // // // // <p>
// // // // // <strong>Platform:</strong>
// // // // // Zoom
// // // // // </p>

// // // // // </div>


// // // // // <div style="
// // // // //     text-align:center;
// // // // //     margin:25px 0;
// // // // // ">

// // // // // <a
// // // // //     href="${ZOOM_MEETING_LINK}"
// // // // //     target="_blank"
// // // // //     style="
// // // // //         display:inline-block;
// // // // //         background:#2D8CFF;
// // // // //         color:#ffffff;
// // // // //         text-decoration:none;
// // // // //         padding:14px 25px;
// // // // //         border-radius:8px;
// // // // //         font-weight:bold;
// // // // //     "
// // // // // >

// // // // // 🎥 JOIN ZOOM WEBINAR

// // // // // </a>

// // // // // </div>


// // // // // <div style="
// // // // //     text-align:center;
// // // // //     margin:25px 0;
// // // // // ">

// // // // // <a
// // // // //     href="${WHATSAPP_COMMUNITY_LINK}"
// // // // //     target="_blank"
// // // // //     style="
// // // // //         display:inline-block;
// // // // //         background:#25D366;
// // // // //         color:#ffffff;
// // // // //         text-decoration:none;
// // // // //         padding:14px 25px;
// // // // //         border-radius:8px;
// // // // //         font-weight:bold;
// // // // //     "
// // // // // >

// // // // // 💬 JOIN WHATSAPP COMMUNITY

// // // // // </a>

// // // // // </div>


// // // // // <p style="
// // // // //     color:#666;
// // // // //     line-height:1.7;
// // // // // ">

// // // // // Please save this email.
// // // // // We will also send you a reminder before the webinar.

// // // // // </p>


// // // // // <p>
// // // // // See you at the webinar! 🎓
// // // // // </p>


// // // // // </div>


// // // // // <div style="
// // // // //     background:#222;
// // // // //     color:#aaa;
// // // // //     padding:18px;
// // // // //     text-align:center;
// // // // //     font-size:12px;
// // // // // ">

// // // // // © 2026 I TECH AI

// // // // // </div>

// // // // // </div>

// // // // // </body>

// // // // // </html>

// // // // // `

// // // // //     };


// // // // //     try {

// // // // //         await transporter.sendMail(
// // // // //             mailOptions
// // // // //         );

// // // // //         console.log(
// // // // //             `📧 Registration email sent to ${lead.email}`
// // // // //         );

// // // // //         return true;

// // // // //     } catch (error) {

// // // // //         console.error(
// // // // //             "❌ Registration email error:",
// // // // //             error.message
// // // // //         );

// // // // //         return false;

// // // // //     }

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | EMAIL - WEBINAR REMINDER
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // async function sendReminderEmail(lead) {

// // // // //     if (!transporter) {

// // // // //         return false;

// // // // //     }


// // // // //     const mailOptions = {

// // // // //         from:
// // // // //             `"I TECH AI" <${EMAIL_USER}>`,

// // // // //         to: lead.email,

// // // // //         subject:
// // // // //             "⏰ Webinar starts in 30 minutes | I TECH AI",

// // // // //         html: `

// // // // // <!DOCTYPE html>

// // // // // <html>

// // // // // <head>

// // // // // <meta charset="UTF-8">

// // // // // </head>

// // // // // <body style="
// // // // //     margin:0;
// // // // //     padding:0;
// // // // //     background:#f5f5f5;
// // // // //     font-family:Arial,sans-serif;
// // // // // ">

// // // // // <div style="
// // // // //     max-width:600px;
// // // // //     margin:30px auto;
// // // // //     background:#ffffff;
// // // // //     border-radius:12px;
// // // // //     overflow:hidden;
// // // // // ">

// // // // // <div style="
// // // // //     background:#d35400;
// // // // //     color:#ffffff;
// // // // //     padding:25px;
// // // // //     text-align:center;
// // // // // ">

// // // // // <h1>
// // // // //     ⏰ Webinar Reminder
// // // // // </h1>

// // // // // </div>


// // // // // <div style="
// // // // //     padding:30px;
// // // // // ">

// // // // // <h2>
// // // // //     Hello ${escapeHtml(lead.name)} 👋
// // // // // </h2>


// // // // // <p style="
// // // // //     font-size:16px;
// // // // //     line-height:1.7;
// // // // // ">

// // // // // Your I TECH AI webinar starts in
// // // // // <strong>30 minutes</strong>.

// // // // // </p>


// // // // // <div style="
// // // // //     background:#fff3e2;
// // // // //     padding:20px;
// // // // //     border-radius:10px;
// // // // // ">

// // // // // <p>
// // // // // <strong>📅 Date:</strong>
// // // // // 8th, 9th & 10th September 2026
// // // // // </p>

// // // // // <p>
// // // // // <strong>⏰ Time:</strong>
// // // // // 8:00 PM – 9:00 PM
// // // // // </p>

// // // // // <p>
// // // // // <strong>🎤 Speaker:</strong>
// // // // // Acharya Pankaj Ji
// // // // // </p>

// // // // // </div>


// // // // // <div style="
// // // // //     text-align:center;
// // // // //     margin:30px 0;
// // // // // ">

// // // // // <a
// // // // //     href="${ZOOM_MEETING_LINK}"
// // // // //     target="_blank"
// // // // //     style="
// // // // //         display:inline-block;
// // // // //         background:#2D8CFF;
// // // // //         color:#ffffff;
// // // // //         text-decoration:none;
// // // // //         padding:15px 30px;
// // // // //         border-radius:8px;
// // // // //         font-weight:bold;
// // // // //     "
// // // // // >

// // // // // 🎥 JOIN ZOOM NOW

// // // // // </a>

// // // // // </div>


// // // // // <p style="
// // // // //     color:#666;
// // // // //     line-height:1.7;
// // // // // ">

// // // // // Please join a few minutes before the session starts.

// // // // // </p>


// // // // // </div>


// // // // // <div style="
// // // // //     background:#222;
// // // // //     color:#aaa;
// // // // //     padding:18px;
// // // // //     text-align:center;
// // // // //     font-size:12px;
// // // // // ">

// // // // // © 2026 I TECH AI

// // // // // </div>

// // // // // </div>

// // // // // </body>

// // // // // </html>

// // // // // `

// // // // //     };


// // // // //     try {

// // // // //         await transporter.sendMail(
// // // // //             mailOptions
// // // // //         );

// // // // //         console.log(
// // // // //             `🔔 Reminder sent to ${lead.email}`
// // // // //         );

// // // // //         return true;

// // // // //     } catch (error) {

// // // // //         console.error(
// // // // //             "❌ Reminder email error:",
// // // // //             error.message
// // // // //         );

// // // // //         return false;

// // // // //     }

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | ESCAPE HTML
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // function escapeHtml(value) {

// // // // //     return String(value)

// // // // //         .replace(/&/g, "&amp;")

// // // // //         .replace(/</g, "&lt;")

// // // // //         .replace(/>/g, "&gt;")

// // // // //         .replace(/"/g, "&quot;")

// // // // //         .replace(/'/g, "&#039;");

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | HEALTH CHECK
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // app.get(
// // // // //     "/",
// // // // //     (req, res) => {

// // // // //         res.json({

// // // // //             success: true,

// // // // //             message:
// // // // //                 "I TECH AI Webinar API is running",

// // // // //             webinarDates:
// // // // //                 WEBINAR_DATES

// // // // //         });

// // // // //     }
// // // // // );


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | POST /api/leads
// // // // // |--------------------------------------------------------------------------
// // // // // |
// // // // // | Register user.
// // // // // |
// // // // // */

// // // // // app.post(
// // // // //     "/api/leads",
// // // // //     async (req, res) => {

// // // // //         try {

// // // // //             const {
// // // // //                 name,
// // // // //                 phone,
// // // // //                 email,
// // // // //                 state,
// // // // //                 communityJoined
// // // // //             } = req.body;


// // // // //             /*
// // // // //              * Validate fields
// // // // //              */

// // // // //             if (
// // // // //                 !name ||
// // // // //                 !phone ||
// // // // //                 !email ||
// // // // //                 !state
// // // // //             ) {

// // // // //                 return res.status(400).json({

// // // // //                     success: false,

// // // // //                     message:
// // // // //                         "Please fill all required fields."

// // // // //                 });

// // // // //             }


// // // // //             /*
// // // // //              * Community validation
// // // // //              */

// // // // //             if (communityJoined !== true) {

// // // // //                 return res.status(400).json({

// // // // //                     success: false,

// // // // //                     message:
// // // // //                         "Please join the WhatsApp Community before registering."

// // // // //                 });

// // // // //             }


// // // // //             /*
// // // // //              * Normalize phone
// // // // //              */

// // // // //             const normalizedPhone =
// // // // //                 String(phone)
// // // // //                     .replace(/\D/g, "")
// // // // //                     .slice(-10);


// // // // //             if (
// // // // //                 normalizedPhone.length !== 10
// // // // //             ) {

// // // // //                 return res.status(400).json({

// // // // //                     success: false,

// // // // //                     message:
// // // // //                         "Please enter a valid 10-digit WhatsApp number."

// // // // //                 });

// // // // //             }


// // // // //             /*
// // // // //              * Check duplicate phone
// // // // //              */

// // // // //             const existingLead =
// // // // //                 await Lead.findOne({

// // // // //                     phone:
// // // // //                         normalizedPhone

// // // // //                 });


// // // // //             if (existingLead) {

// // // // //                 return res.status(409).json({

// // // // //                     success: false,

// // // // //                     message:
// // // // //                         "This WhatsApp number is already registered."

// // // // //                 });

// // // // //             }


// // // // //             /*
// // // // //              * Create lead
// // // // //              */

// // // // //             const newLead =
// // // // //                 new Lead({

// // // // //                     name:
// // // // //                         String(name).trim(),

// // // // //                     phone:
// // // // //                         normalizedPhone,

// // // // //                     email:
// // // // //                         String(email)
// // // // //                             .trim()
// // // // //                             .toLowerCase(),

// // // // //                     state:
// // // // //                         String(state).trim(),

// // // // //                     communityJoined:
// // // // //                         true,

// // // // //                     communityJoinDate:
// // // // //                         new Date(),

// // // // //                     zoomEmailSent:
// // // // //                         false,

// // // // //                     zoomReminderSent:
// // // // //                         false

// // // // //                 });


// // // // //             await newLead.save();


// // // // //             /*
// // // // //              * Send registration email
// // // // //              */

// // // // //             const emailSent =
// // // // //                 await sendRegistrationEmail(
// // // // //                     newLead
// // // // //                 );


// // // // //             /*
// // // // //              * Update email status
// // // // //              */

// // // // //             if (emailSent) {

// // // // //                 newLead.zoomEmailSent =
// // // // //                     true;

// // // // //                 await newLead.save();

// // // // //             }


// // // // //             /*
// // // // //              * Response
// // // // //              */

// // // // //             return res.status(201).json({

// // // // //                 success: true,

// // // // //                 message:
// // // // //                     emailSent
// // // // //                         ? "Registration successful. Zoom link has been sent to your email."
// // // // //                         : "Registration successful. Please use the Zoom link below.",

// // // // //                 zoomLink:
// // // // //                     ZOOM_MEETING_LINK,

// // // // //                 whatsappCommunityLink:
// // // // //                     WHATSAPP_COMMUNITY_LINK,

// // // // //                 emailSent

// // // // //             });


// // // // //         } catch (error) {

// // // // //             console.error(
// // // // //                 "❌ Registration Error:",
// // // // //                 error
// // // // //             );


// // // // //             /*
// // // // //              * Duplicate MongoDB key
// // // // //              */

// // // // //             if (
// // // // //                 error.code === 11000
// // // // //             ) {

// // // // //                 return res.status(409).json({

// // // // //                     success: false,

// // // // //                     message:
// // // // //                         "This WhatsApp number is already registered."

// // // // //                 });

// // // // //             }


// // // // //             return res.status(500).json({

// // // // //                 success: false,

// // // // //                 message:
// // // // //                     "Server Error. Please try again."

// // // // //             });

// // // // //         }

// // // // //     }
// // // // // );


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | GET /api/leads
// // // // // |--------------------------------------------------------------------------
// // // // // |
// // // // // | Admin / testing endpoint.
// // // // // |
// // // // // */

// // // // // app.get(
// // // // //     "/api/leads",
// // // // //     async (req, res) => {

// // // // //         try {

// // // // //             const leads =
// // // // //                 await Lead
// // // // //                     .find()
// // // // //                     .sort({
// // // // //                         registrationDate: -1
// // // // //                     })
// // // // //                     .lean();


// // // // //             return res.json({

// // // // //                 success: true,

// // // // //                 total:
// // // // //                     leads.length,

// // // // //                 communityJoined:
// // // // //                     leads.filter(
// // // // //                         lead =>
// // // // //                             lead.communityJoined === true
// // // // //                     ).length,

// // // // //                 zoomEmailSent:
// // // // //                     leads.filter(
// // // // //                         lead =>
// // // // //                             lead.zoomEmailSent === true
// // // // //                     ).length,

// // // // //                 zoomReminderSent:
// // // // //                     leads.filter(
// // // // //                         lead =>
// // // // //                             lead.zoomReminderSent === true
// // // // //                     ).length,

// // // // //                 data:
// // // // //                     leads

// // // // //             });


// // // // //         } catch (error) {

// // // // //             console.error(
// // // // //                 "❌ Get Leads Error:",
// // // // //                 error.message
// // // // //             );


// // // // //             return res.status(500).json({

// // // // //                 success: false,

// // // // //                 message:
// // // // //                     error.message

// // // // //             });

// // // // //         }

// // // // //     }
// // // // // );


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | REMINDER SYSTEM
// // // // // |--------------------------------------------------------------------------
// // // // // |
// // // // // | Checks every minute.
// // // // // |
// // // // // | Reminder = 30 minutes before webinar.
// // // // // |
// // // // // */

// // // // // async function checkWebinarReminders() {

// // // // //     try {

// // // // //         const now =
// // // // //             Date.now();


// // // // //         for (
// // // // //             const webinarDateString
// // // // //             of WEBINAR_DATES
// // // // //         ) {

// // // // //             const webinarTime =
// // // // //                 new Date(
// // // // //                     webinarDateString
// // // // //                 ).getTime();


// // // // //             const reminderTime =
// // // // //                 webinarTime -
// // // // //                 (30 * 60 * 1000);


// // // // //             /*
// // // // //              * Allow 1 minute window
// // // // //              */

// // // // //             if (
// // // // //                 now >= reminderTime &&
// // // // //                 now < reminderTime + 60000
// // // // //             ) {

// // // // //                 console.log(
// // // // //                     "⏰ Reminder window reached:",
// // // // //                     webinarDateString
// // // // //                 );


// // // // //                 const leads =
// // // // //                     await Lead.find({

// // // // //                         zoomEmailSent:
// // // // //                             true,

// // // // //                         zoomReminderSent:
// // // // //                             false

// // // // //                     });


// // // // //                 console.log(
// // // // //                     `📧 Sending reminders to ${leads.length} users`
// // // // //                 );


// // // // //                 for (
// // // // //                     const lead
// // // // //                     of leads
// // // // //                 ) {

// // // // //                     const sent =
// // // // //                         await sendReminderEmail(
// // // // //                             lead
// // // // //                         );


// // // // //                     if (sent) {

// // // // //                         lead.zoomReminderSent =
// // // // //                             true;

// // // // //                         await lead.save();

// // // // //                     }

// // // // //                 }

// // // // //             }

// // // // //         }

// // // // //     } catch (error) {

// // // // //         console.error(
// // // // //             "❌ Reminder scheduler error:",
// // // // //             error.message
// // // // //         );

// // // // //     }

// // // // // }


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | START REMINDER SCHEDULER
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // setInterval(
// // // // //     checkWebinarReminders,
// // // // //     60 * 1000
// // // // // );


// // // // // /*
// // // // //  * Run once when server starts.
// // // // //  */

// // // // // checkWebinarReminders();


// // // // // /*
// // // // // |--------------------------------------------------------------------------
// // // // // | START SERVER
// // // // // |--------------------------------------------------------------------------
// // // // // */

// // // // // app.listen(
// // // // //     PORT,
// // // // //     () => {

// // // // //         console.log(
// // // // //             `🚀 I TECH AI server running on port ${PORT}`
// // // // //         );

// // // // //         console.log(
// // // // //             `🌐 API: http://localhost:${PORT}`
// // // // //         );

// // // // //         console.log(
// // // // //             `📱 WhatsApp Community: ${WHATSAPP_COMMUNITY_LINK}`
// // // // //         );

// // // // //         console.log(
// // // // //             `🎥 Zoom: ${ZOOM_MEETING_LINK}`
// // // // //         );

// // // // //     }
// // // // // );



// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const cors = require("cors");
// // // // const nodemailer = require("nodemailer");
// // // // require("dotenv").config();

// // // // const app = express();

// // // // app.use(
// // // //   cors({
// // // //     origin: "*",
// // // //   })
// // // // );

// // // // app.use(express.json());

// // // // /* =========================================================
// // // //    ENVIRONMENT VARIABLES
// // // // ========================================================= */

// // // // const PORT = process.env.PORT || 5000;

// // // // const MONGO_URI = process.env.MONGO_URI;

// // // // const EMAIL_USER = process.env.EMAIL_USER;
// // // // const EMAIL_PASS = process.env.EMAIL_PASS;

// // // // const ZOOM_MEETING_LINK = process.env.https://meet.google.com/uca-deoe-vnh?hs=151;

// // // // const WHATSAPP_COMMUNITY_LINK =
// // // //   process.env.https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E;


// // // // /* =========================================================
// // // //    BASIC ENV CHECK
// // // // ========================================================= */

// // // // if (!MONGO_URI) {
// // // //   console.error("❌ MONGO_URI is missing in .env");
// // // // }

// // // // if (!EMAIL_USER || !EMAIL_PASS) {
// // // //   console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
// // // // }

// // // // if (!ZOOM_MEETING_LINK) {
// // // //   console.error("❌ ZOOM_MEETING_LINK is missing in .env");
// // // // }

// // // // if (!WHATSAPP_COMMUNITY_LINK) {
// // // //   console.error("❌ WHATSAPP_COMMUNITY_LINK is missing in .env");
// // // // }


// // // // /* =========================================================
// // // //    MONGODB CONNECTION
// // // // ========================================================= */

// // // // mongoose
// // // //   .connect(MONGO_URI)
// // // //   .then(() => {
// // // //     console.log("✅ MongoDB connected");
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("❌ MongoDB connection error:");
// // // //     console.error(error.message);
// // // //   });


// // // // /* =========================================================
// // // //    LEAD SCHEMA
// // // // ========================================================= */

// // // // const leadSchema = new mongoose.Schema(
// // // //   {
// // // //     name: {
// // // //       type: String,
// // // //       required: true,
// // // //       trim: true,
// // // //     },

// // // //     phone: {
// // // //       type: String,
// // // //       required: true,
// // // //       unique: true,
// // // //       trim: true,
// // // //     },

// // // //     email: {
// // // //       type: String,
// // // //       required: true,
// // // //       trim: true,
// // // //       lowercase: true,
// // // //     },

// // // //     state: {
// // // //       type: String,
// // // //       required: true,
// // // //       trim: true,
// // // //     },

// // // //     communityJoined: {
// // // //       type: Boolean,
// // // //       default: false,
// // // //     },

// // // //     communityJoinDate: {
// // // //       type: Date,
// // // //       default: null,
// // // //     },

// // // //     zoomEmailSent: {
// // // //       type: Boolean,
// // // //       default: false,
// // // //     },

// // // //     zoomReminderSent: {
// // // //       type: Boolean,
// // // //       default: false,
// // // //     },

// // // //     registrationDate: {
// // // //       type: Date,
// // // //       default: Date.now,
// // // //     },
// // // //   },
// // // //   {
// // // //     timestamps: true,
// // // //   }
// // // // );

// // // // const Lead = mongoose.model("Lead", leadSchema);


// // // // /* =========================================================
// // // //    EMAIL TRANSPORTER
// // // // ========================================================= */

// // // // const transporter = nodemailer.createTransport({
// // // //   service: "gmail",

// // // //   auth: {
// // // //     user: EMAIL_USER,
// // // //     pass: EMAIL_PASS,
// // // //   },
// // // // });


// // // // /* =========================================================
// // // //    CHECK EMAIL CONFIGURATION
// // // // ========================================================= */

// // // // async function verifyEmailConfiguration() {
// // // //   if (!EMAIL_USER || !EMAIL_PASS) {
// // // //     console.log("⚠️ Email configuration not available");
// // // //     return;
// // // //   }

// // // //   try {
// // // //     await transporter.verify();

// // // //     console.log("✅ Email service ready");
// // // //   } catch (error) {
// // // //     console.error("❌ Email service error:");
// // // //     console.error(error.message);
// // // //   }
// // // // }


// // // // /* =========================================================
// // // //    REGISTRATION EMAIL
// // // // ========================================================= */

// // // // async function sendRegistrationEmail(lead) {
// // // //   const mailOptions = {
// // // //     from: `"I TECH AI" <${EMAIL_USER}>`,

// // // //     to: lead.email,

// // // //     subject: "🎉 Your Webinar Registration is Confirmed",

// // // //     html: `
// // // //       <!DOCTYPE html>

// // // //       <html>

// // // //       <head>

// // // //         <meta charset="UTF-8">

// // // //         <meta name="viewport"
// // // //               content="width=device-width, initial-scale=1.0">

// // // //       </head>

// // // //       <body
// // // //         style="
// // // //           margin:0;
// // // //           padding:0;
// // // //           background:#f5f5f5;
// // // //           font-family:Arial,Helvetica,sans-serif;
// // // //         "
// // // //       >

// // // //         <div
// // // //           style="
// // // //             max-width:600px;
// // // //             margin:30px auto;
// // // //             background:white;
// // // //             border-radius:12px;
// // // //             overflow:hidden;
// // // //             box-shadow:0 5px 20px rgba(0,0,0,0.08);
// // // //           "
// // // //         >

// // // //           <div
// // // //             style="
// // // //               background:#f97316;
// // // //               color:white;
// // // //               padding:30px 20px;
// // // //               text-align:center;
// // // //             "
// // // //           >

// // // //             <h1 style="margin:0;">
// // // //               🎉 Registration Confirmed
// // // //             </h1>

// // // //             <p style="margin:10px 0 0;">
// // // //               I TECH AI Webinar
// // // //             </p>

// // // //           </div>


// // // //           <div style="padding:30px 25px;">

// // // //             <p>
// // // //               Hello <strong>${lead.name}</strong>,
// // // //             </p>

// // // //             <p>
// // // //               Thank you for registering for the I TECH AI webinar.
// // // //               Your registration has been successfully completed.
// // // //             </p>


// // // //             <div
// // // //               style="
// // // //                 background:#fff7ed;
// // // //                 border-left:4px solid #f97316;
// // // //                 padding:18px;
// // // //                 margin:20px 0;
// // // //               "
// // // //             >

// // // //               <h3 style="margin-top:0;">
// // // //                 📅 Webinar Schedule
// // // //               </h3>

// // // //               <p>
// // // //                 <strong>8th, 9th & 10th September</strong>
// // // //               </p>

// // // //               <p>
// // // //                 🕗 Time: <strong>8:00 PM – 9:00 PM</strong>
// // // //               </p>

// // // //             </div>


// // // //             <div style="text-align:center;margin:25px 0;">

// // // //               <a
// // // //                 href="${https:meet.google.com/uca-deoe-vnh?hs=151}"
// // // //                 target="_blank"
// // // //                 style="
// // // //                   display:inline-block;
// // // //                   background:#f97316;
// // // //                   color:white;
// // // //                   text-decoration:none;
// // // //                   padding:14px 25px;
// // // //                   border-radius:8px;
// // // //                   font-weight:bold;
// // // //                 "
// // // //               >
// // // //                 🎥 Join Zoom Webinar
// // // //               </a>

// // // //             </div>


// // // //             <div style="text-align:center;margin:25px 0;">

// // // //               <a
// // // //                 href="${WHATSAPP_COMMUNITY_LINK}"
// // // //                 target="_blank"
// // // //                 style="
// // // //                   display:inline-block;
// // // //                   background:#16a34a;
// // // //                   color:white;
// // // //                   text-decoration:none;
// // // //                   padding:14px 25px;
// // // //                   border-radius:8px;
// // // //                   font-weight:bold;
// // // //                 "
// // // //               >
// // // //                 💬 Join WhatsApp Community
// // // //               </a>

// // // //             </div>


// // // //             <p style="margin-top:30px;">
// // // //               Please save this email so that you can easily access
// // // //               the webinar link.
// // // //             </p>


// // // //             <p>
// // // //               Regards,<br>
// // // //               <strong>I TECH AI Team</strong>
// // // //             </p>

// // // //           </div>


// // // //           <div
// // // //             style="
// // // //               background:#fafafa;
// // // //               padding:20px;
// // // //               text-align:center;
// // // //               color:#777;
// // // //               font-size:13px;
// // // //             "
// // // //           >

// // // //             © ${new Date().getFullYear()} I TECH AI

// // // //           </div>

// // // //         </div>

// // // //       </body>

// // // //       </html>
// // // //     `,
// // // //   };

// // // //   await transporter.sendMail(mailOptions);
// // // // }


// // // // /* =========================================================
// // // //    WEBINAR DATES
// // // // ========================================================= */

// // // // const webinarDates = [
// // // //   "2026-09-08T20:00:00+05:30",
// // // //   "2026-09-09T20:00:00+05:30",
// // // //   "2026-09-10T20:00:00+05:30",
// // // // ];


// // // // /* =========================================================
// // // //    REMINDER EMAIL
// // // // ========================================================= */

// // // // async function sendReminderEmail(lead) {
// // // //   const mailOptions = {
// // // //     from: `"I TECH AI" <${EMAIL_USER}>`,

// // // //     to: lead.email,

// // // //     subject: "⏰ Webinar Starts in 30 Minutes",

// // // //     html: `
// // // //       <!DOCTYPE html>

// // // //       <html>

// // // //       <body
// // // //         style="
// // // //           margin:0;
// // // //           padding:0;
// // // //           background:#f5f5f5;
// // // //           font-family:Arial,Helvetica,sans-serif;
// // // //         "
// // // //       >

// // // //         <div
// // // //           style="
// // // //             max-width:600px;
// // // //             margin:30px auto;
// // // //             background:white;
// // // //             border-radius:12px;
// // // //             overflow:hidden;
// // // //           "
// // // //         >

// // // //           <div
// // // //             style="
// // // //               background:#f97316;
// // // //               color:white;
// // // //               padding:25px;
// // // //               text-align:center;
// // // //             "
// // // //           >

// // // //             <h1 style="margin:0;">
// // // //               ⏰ Webinar Reminder
// // // //             </h1>

// // // //           </div>


// // // //           <div style="padding:30px;">

// // // //             <p>
// // // //               Hello <strong>${lead.name}</strong>,
// // // //             </p>

// // // //             <p>
// // // //               Your I TECH AI webinar is starting in approximately
// // // //               <strong>30 minutes</strong>.
// // // //             </p>


// // // //             <div
// // // //               style="
// // // //                 background:#fff7ed;
// // // //                 padding:18px;
// // // //                 border-radius:8px;
// // // //                 margin:20px 0;
// // // //               "
// // // //             >

// // // //               <p>
// // // //                 📅 <strong>8th, 9th & 10th September</strong>
// // // //               </p>

// // // //               <p>
// // // //                 🕗 <strong>8:00 PM – 9:00 PM</strong>
// // // //               </p>

// // // //             </div>


// // // //             <div style="text-align:center;margin:25px 0;">

// // // //               <a
// // // //                 href="${ZOOM_MEETING_LINK}"
// // // //                 target="_blank"
// // // //                 style="
// // // //                   display:inline-block;
// // // //                   background:#f97316;
// // // //                   color:white;
// // // //                   text-decoration:none;
// // // //                   padding:15px 28px;
// // // //                   border-radius:8px;
// // // //                   font-weight:bold;
// // // //                 "
// // // //               >
// // // //                 🎥 Join Webinar Now
// // // //               </a>

// // // //             </div>


// // // //             <p>
// // // //               See you inside the webinar!
// // // //             </p>


// // // //             <p>
// // // //               Regards,<br>
// // // //               <strong>I TECH AI Team</strong>
// // // //             </p>

// // // //           </div>

// // // //         </div>

// // // //       </body>

// // // //       </html>
// // // //     `,
// // // //   };

// // // //   await transporter.sendMail(mailOptions);
// // // // }


// // // // /* =========================================================
// // // //    HEALTH CHECK
// // // // ========================================================= */

// // // // app.get("/", (req, res) => {
// // // //   res.json({
// // // //     success: true,
// // // //     message: "I TECH AI Webinar Backend is running 🚀",
// // // //   });
// // // // });


// // // // /* =========================================================
// // // //    CREATE LEAD
// // // // ========================================================= */

// // // // app.post("/api/leads", async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       name,
// // // //       phone,
// // // //       email,
// // // //       state,
// // // //       communityJoined,
// // // //     } = req.body;


// // // //     /* -----------------------------
// // // //        VALIDATION
// // // //     ----------------------------- */

// // // //     if (!name || !phone || !email || !state) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Name, phone, email and state are required.",
// // // //       });
// // // //     }


// // // //     if (communityJoined !== true) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message:
// // // //           "Please join the WhatsApp Community before submitting the form.",
// // // //       });
// // // //     }


// // // //     /* -----------------------------
// // // //        NORMALIZE PHONE
// // // //     ----------------------------- */

// // // //     const normalizedPhone = String(phone)
// // // //       .replace(/\D/g, "")
// // // //       .slice(-10);


// // // //     if (normalizedPhone.length !== 10) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Please enter a valid 10-digit WhatsApp number.",
// // // //       });
// // // //     }


// // // //     /* -----------------------------
// // // //        CHECK DUPLICATE
// // // //     ----------------------------- */

// // // //     const existingLead = await Lead.findOne({
// // // //       phone: normalizedPhone,
// // // //     });


// // // //     if (existingLead) {
// // // //       return res.status(409).json({
// // // //         success: false,
// // // //         message:
// // // //           "This WhatsApp number is already registered for the webinar.",
// // // //         zoomLink: ZOOM_MEETING_LINK,
// // // //         whatsappCommunityLink: WHATSAPP_COMMUNITY_LINK,
// // // //       });
// // // //     }


// // // //     /* -----------------------------
// // // //        CREATE LEAD
// // // //     ----------------------------- */

// // // //     const lead = new Lead({
// // // //       name: String(name).trim(),

// // // //       phone: normalizedPhone,

// // // //       email: String(email).trim().toLowerCase(),

// // // //       state: String(state).trim(),

// // // //       communityJoined: true,

// // // //       communityJoinDate: new Date(),

// // // //       registrationDate: new Date(),
// // // //     });


// // // //     await lead.save();


// // // //     /* -----------------------------
// // // //        SEND EMAIL
// // // //     ----------------------------- */

// // // //     let emailSent = false;


// // // //     try {
// // // //       await sendRegistrationEmail(lead);

// // // //       lead.zoomEmailSent = true;

// // // //       await lead.save();

// // // //       emailSent = true;

// // // //       console.log(
// // // //         `📧 Registration email sent to ${lead.email}`
// // // //       );

// // // //     } catch (emailError) {

// // // //       console.error(
// // // //         "❌ Registration email failed:",
// // // //         emailError.message
// // // //       );

// // // //     }


// // // //     /* -----------------------------
// // // //        RESPONSE
// // // //     ----------------------------- */

// // // //     return res.status(201).json({
// // // //       success: true,

// // // //       message:
// // // //         "Registration successful! Zoom and WhatsApp links are ready.",

// // // //       zoomLink: ZOOM_MEETING_LINK,

// // // //       whatsappCommunityLink:
// // // //         WHATSAPP_COMMUNITY_LINK,

// // // //       emailSent,
// // // //     });

// // // //   } catch (error) {

// // // //     console.error("❌ Lead creation error:");
// // // //     console.error(error);


// // // //     return res.status(500).json({
// // // //       success: false,
// // // //       message: "Server error. Please try again later.",
// // // //     });
// // // //   }
// // // // });


// // // // /* =========================================================
// // // //    GET ALL LEADS
// // // // ========================================================= */

// // // // app.get("/api/leads", async (req, res) => {
// // // //   try {

// // // //     const leads = await Lead.find()
// // // //       .sort({
// // // //         registrationDate: -1,
// // // //       })
// // // //       .lean();


// // // //     const total = leads.length;

// // // //     const communityJoined = leads.filter(
// // // //       (lead) => lead.communityJoined === true
// // // //     ).length;

// // // //     const zoomEmailSent = leads.filter(
// // // //       (lead) => lead.zoomEmailSent === true
// // // //     ).length;

// // // //     const zoomReminderSent = leads.filter(
// // // //       (lead) => lead.zoomReminderSent === true
// // // //     ).length;


// // // //     return res.json({
// // // //       success: true,

// // // //       total,

// // // //       communityJoined,

// // // //       zoomEmailSent,

// // // //       zoomReminderSent,

// // // //       data: leads,
// // // //     });

// // // //   } catch (error) {

// // // //     console.error(
// // // //       "❌ Error fetching leads:",
// // // //       error.message
// // // //     );

// // // //     return res.status(500).json({
// // // //       success: false,
// // // //       message: "Unable to fetch leads.",
// // // //     });
// // // //   }
// // // // });


// // // // /* =========================================================
// // // //    GET SINGLE LEAD
// // // // ========================================================= */

// // // // app.get("/api/leads/:phone", async (req, res) => {
// // // //   try {

// // // //     const normalizedPhone = String(
// // // //       req.params.phone
// // // //     )
// // // //       .replace(/\D/g, "")
// // // //       .slice(-10);


// // // //     const lead = await Lead.findOne({
// // // //       phone: normalizedPhone,
// // // //     }).lean();


// // // //     if (!lead) {
// // // //       return res.status(404).json({
// // // //         success: false,
// // // //         message: "Lead not found.",
// // // //       });
// // // //     }


// // // //     return res.json({
// // // //       success: true,
// // // //       data: lead,
// // // //     });

// // // //   } catch (error) {

// // // //     console.error(
// // // //       "❌ Error fetching lead:",
// // // //       error.message
// // // //     );

// // // //     return res.status(500).json({
// // // //       success: false,
// // // //       message: "Server error.",
// // // //     });
// // // //   }
// // // // });


// // // // /* =========================================================
// // // //    MANUAL TEST EMAIL
// // // // ========================================================= */

// // // // app.post("/api/test-email", async (req, res) => {
// // // //   try {

// // // //     const { email } = req.body;


// // // //     if (!email) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Email is required.",
// // // //       });
// // // //     }


// // // //     const testLead = {
// // // //       name: "Test User",
// // // //       email,
// // // //     };


// // // //     await sendRegistrationEmail(testLead);


// // // //     return res.json({
// // // //       success: true,
// // // //       message: "Test email sent successfully.",
// // // //     });

// // // //   } catch (error) {

// // // //     console.error(
// // // //       "❌ Test email failed:",
// // // //       error.message
// // // //     );

// // // //     return res.status(500).json({
// // // //       success: false,
// // // //       message: "Test email failed.",
// // // //       error: error.message,
// // // //     });
// // // //   }
// // // // });


// // // // /* =========================================================
// // // //    REMINDER SCHEDULER
// // // // ========================================================= */

// // // // async function checkAndSendReminders() {

// // // //   try {

// // // //     const now = new Date();


// // // //     for (const webinarDateString of webinarDates) {

// // // //       const webinarDate =
// // // //         new Date(webinarDateString);


// // // //       const reminderTime =
// // // //         new Date(
// // // //           webinarDate.getTime() -
// // // //           30 * 60 * 1000
// // // //         );


// // // //       const currentDifference =
// // // //         Math.abs(
// // // //           now.getTime() -
// // // //           reminderTime.getTime()
// // // //         );


// // // //       /*
// // // //        * Run reminder when current time is within
// // // //        * approximately 1 minute of reminder time.
// // // //        */

// // // //       if (currentDifference <= 60 * 1000) {

// // // //         console.log(
// // // //           `⏰ Reminder window reached for ${webinarDateString}`
// // // //         );


// // // //         const leads = await Lead.find({
// // // //           zoomEmailSent: true,
// // // //         });


// // // //         for (const lead of leads) {

// // // //           try {

// // // //             await sendReminderEmail(lead);


// // // //             lead.zoomReminderSent = true;

// // // //             await lead.save();


// // // //             console.log(
// // // //               `📧 Reminder sent to ${lead.email}`
// // // //             );

// // // //           } catch (error) {

// // // //             console.error(
// // // //               `❌ Reminder failed for ${lead.email}:`,
// // // //               error.message
// // // //             );

// // // //           }

// // // //         }

// // // //       }

// // // //     }

// // // //   } catch (error) {

// // // //     console.error(
// // // //       "❌ Reminder scheduler error:",
// // // //       error.message
// // // //     );
// // // //   }
// // // // }


// // // // /* =========================================================
// // // //    START REMINDER CHECK
// // // // ========================================================= */

// // // // setInterval(
// // // //   checkAndSendReminders,
// // // //   60 * 1000
// // // // );


// // // // /* =========================================================
// // // //    START SERVER
// // // // ========================================================= */

// // // // app.listen(PORT, () => {

// // // //   console.log("");
// // // //   console.log("======================================");
// // // //   console.log("🚀 I TECH AI WEBINAR BACKEND");
// // // //   console.log("======================================");
// // // //   console.log(`🌐 Server: http://localhost:${PORT}`);
// // // //   console.log(`📋 Leads:  http://localhost:${PORT}/api/leads`);
// // // //   console.log("📧 Email system: enabled");
// // // //   console.log("🎥 Zoom link: configured from .env");
// // // //   console.log("💬 WhatsApp link: configured from .env");
// // // //   console.log("⏰ Reminder scheduler: running");
// // // //   console.log("======================================");
// // // //   console.log("");

// // // //   verifyEmailConfiguration();

// // // // });



// // // const express = require("express");
// // // const path= require("path");
// // // const mongoose = require("mongoose");
// // // const fs = require("fs");
// // // const cors = require("cors");
// // // const nodemailer = require("nodemailer");
// // // require("dotenv").config();

// // // const app = express();

// // // /* =========================================================
// // //    MIDDLEWARE
// // // ========================================================= */

// // // app.use(
// // //   cors({
// // //     origin: "*",
// // //   })
// // // );

// // // app.use(express.json());
// // // app.use(express.static(__dirname));
// // // // Serve webinar image explicitly
// // // app.get("/1000044144.jpg", (req, res) => {
// // //   const imagePath = path.join(__dirname, "1000044144.jpg");

// // //   if (!fs.existsSync(imagePath)) {
// // //     console.error("❌ Image not found:", imagePath);
// // //     return res.status(404).send("Image not found");
// // //   }

// // //   res.sendFile(imagePath);
// // // });

// // // /* =========================================================
// // //    CONFIGURATION
// // // ========================================================= */

// // // const PORT = process.env.PORT || 5000;

// // // const MONGO_URI = process.env.MONGO_URI;

// // // const EMAIL_USER = process.env.EMAIL_USER;
// // // const EMAIL_PASS = process.env.EMAIL_PASS;


// // // /* =========================================================
// // //    WEBINAR LINKS
// // // ========================================================= */

// // // /*
// // //  * Google Meet link
// // //  */
// // // const WEBINAR_MEETING_LINK =
// // //   "https://meet.google.com/uca-deoe-vnh?hs=151";


// // // /*
// // //  * WhatsApp Channel link
// // //  */
// // // const WHATSAPP_COMMUNITY_LINK =
// // //   "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";


// // // /* =========================================================
// // //    BASIC ENV CHECK
// // // ========================================================= */

// // // if (!MONGO_URI) {
// // //   console.error("❌ MONGO_URI is missing in .env");
// // // }

// // // if (!EMAIL_USER || !EMAIL_PASS) {
// // //   console.error("❌ EMAIL_USER or EMAIL_PASS is missing in .env");
// // // }


// // // /* =========================================================
// // //    MONGODB CONNECTION
// // // ========================================================= */

// // // // mongoose
// // // //   .connect(MONGO_URI)
// // // //   .then(() => {
// // // //     console.log("✅ MongoDB connected");
// // // //   })
// // // //   .catch((error) => {
// // // //     console.error("❌ MongoDB connection error:");
// // // //     console.error(error.message);
// // // //   });

// // // if (MONGO_URI) {
// // //   mongoose
// // //     .connect(MONGO_URI)
// // //     .then(() => {
// // //       console.log("✅ MongoDB connected");
// // //     })
// // //     .catch((error) => {
// // //       console.error("❌ MongoDB connection error:");
// // //       console.error(error.message);
// // //     });
// // // } else {
// // //   console.error("❌ MONGO_URI is missing. MongoDB connection skipped.");
// // // }


// // // /* =========================================================
// // //    LEAD SCHEMA
// // // ========================================================= */

// // // const leadSchema = new mongoose.Schema(
// // //   {
// // //     name: {
// // //       type: String,
// // //       required: true,
// // //       trim: true,
// // //     },

// // //     phone: {
// // //       type: String,
// // //       required: true,
// // //       unique: true,
// // //       trim: true,
// // //     },

// // //     email: {
// // //       type: String,
// // //       required: true,
// // //       trim: true,
// // //       lowercase: true,
// // //     },

// // //     state: {
// // //       type: String,
// // //       required: true,
// // //       trim: true,
// // //     },

// // //     communityJoined: {
// // //       type: Boolean,
// // //       default: false,
// // //     },

// // //     communityJoinDate: {
// // //       type: Date,
// // //       default: null,
// // //     },

// // //     zoomEmailSent: {
// // //       type: Boolean,
// // //       default: false,
// // //     },

// // //     zoomReminderSent: {
// // //       type: Boolean,
// // //       default: false,
// // //     },

// // //     registrationDate: {
// // //       type: Date,
// // //       default: Date.now,
// // //     },
// // //   },
// // //   {
// // //     timestamps: true,
// // //   }
// // // );

// // // const Lead = mongoose.model("Lead", leadSchema);


// // // /* =========================================================
// // //    EMAIL TRANSPORTER
// // // ========================================================= */

// // // const transporter = nodemailer.createTransport({
// // //   service: "gmail",

// // //   auth: {
// // //     user: EMAIL_USER,
// // //     pass: EMAIL_PASS,
// // //   },
// // // });


// // // /* =========================================================
// // //    VERIFY EMAIL
// // // ========================================================= */

// // // async function verifyEmailConfiguration() {
// // //   if (!EMAIL_USER || !EMAIL_PASS) {
// // //     console.log("⚠️ Email configuration not available");
// // //     return;
// // //   }

// // //   try {
// // //     await transporter.verify();

// // //     console.log("✅ Email service ready");
// // //   } catch (error) {
// // //     console.error("❌ Email service error:");
// // //     console.error(error.message);
// // //   }
// // // }


// // // /* =========================================================
// // //    ESCAPE HTML
// // // ========================================================= */

// // // function escapeHtml(value) {
// // //   return String(value)
// // //     .replace(/&/g, "&amp;")
// // //     .replace(/</g, "&lt;")
// // //     .replace(/>/g, "&gt;")
// // //     .replace(/"/g, "&quot;")
// // //     .replace(/'/g, "&#039;");
// // // }


// // // /* =========================================================
// // //    REGISTRATION EMAIL
// // // ========================================================= */

// // // async function sendRegistrationEmail(lead) {

// // //   const mailOptions = {
// // //     from: `"I TECH AI" <${EMAIL_USER}>`,

// // //     to: lead.email,

// // //     subject:
// // //       "🎉 Your Webinar Registration is Confirmed | I TECH AI",

// // //     html: `
// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta charset="UTF-8">

// // // <meta
// // //   name="viewport"
// // //   content="width=device-width, initial-scale=1.0"
// // // >

// // // </head>


// // // <body
// // //   style="
// // //     margin:0;
// // //     padding:0;
// // //     background:#f5f5f5;
// // //     font-family:Arial,Helvetica,sans-serif;
// // //   "
// // // >


// // // <div
// // //   style="
// // //     max-width:600px;
// // //     margin:30px auto;
// // //     background:white;
// // //     border-radius:12px;
// // //     overflow:hidden;
// // //     box-shadow:0 5px 20px rgba(0,0,0,0.08);
// // //   "
// // // >


// // // <!-- HEADER -->

// // // <div
// // //   style="
// // //     background:#f97316;
// // //     color:white;
// // //     padding:30px 20px;
// // //     text-align:center;
// // //   "
// // // >

// // // <h1 style="margin:0;">
// // //   🎉 Registration Confirmed
// // // </h1>

// // // <p style="margin:10px 0 0;">
// // //   I TECH AI Webinar
// // // </p>

// // // </div>


// // // <!-- CONTENT -->

// // // <div style="padding:30px 25px;">

// // // <p>
// // //   Hello <strong>${escapeHtml(lead.name)}</strong> 👋
// // // </p>


// // // <p>
// // //   Thank you for registering for the I TECH AI webinar.
// // //   Your registration has been successfully completed.
// // // </p>


// // // <!-- WEBINAR DETAILS -->

// // // <div
// // //   style="
// // //     background:#fff7ed;
// // //     border-left:4px solid #f97316;
// // //     padding:18px;
// // //     margin:20px 0;
// // //   "
// // // >

// // // <h3 style="margin-top:0;">
// // //   📅 Webinar Schedule
// // // </h3>

// // // <p>
// // //   <strong>8th, 9th & 10th September 2026</strong>
// // // </p>

// // // <p>
// // //   🕗 Time:
// // //   <strong>8:00 PM – 9:00 PM</strong>
// // // </p>

// // // <p>
// // //   🎤 Speaker:
// // //   <strong>MR Deepak sir</strong>
// // // </p>

// // // <p>
// // //   💻 Platform:
// // //   <strong>Google Meet</strong>
// // // </p>

// // // </div>


// // // <!-- GOOGLE MEET BUTTON -->

// // // <div
// // //   style="
// // //     text-align:center;
// // //     margin:25px 0;
// // //   "
// // // >

// // // <a
// // //   href="${WEBINAR_MEETING_LINK}"
// // //   target="_blank"
// // //   style="
// // //     display:inline-block;
// // //     background:#f97316;
// // //     color:white;
// // //     text-decoration:none;
// // //     padding:14px 25px;
// // //     border-radius:8px;
// // //     font-weight:bold;
// // //   "
// // // >

// // // 🎥 JOIN GOOGLE MEET

// // // </a>

// // // </div>


// // // <!-- WHATSAPP BUTTON -->

// // // <div
// // //   style="
// // //     text-align:center;
// // //     margin:25px 0;
// // //   "
// // // >

// // // <a
// // //   href="${WHATSAPP_COMMUNITY_LINK}"
// // //   target="_blank"
// // //   style="
// // //     display:inline-block;
// // //     background:#16a34a;
// // //     color:white;
// // //     text-decoration:none;
// // //     padding:14px 25px;
// // //     border-radius:8px;
// // //     font-weight:bold;
// // //   "
// // // >

// // // 💬 JOIN WHATSAPP CHANNEL

// // // </a>

// // // </div>


// // // <p style="margin-top:30px;">

// // // Please save this email so that you can easily access
// // // the webinar and WhatsApp links.

// // // </p>


// // // <p>

// // // Regards,<br>

// // // <strong>I TECH AI Team</strong>

// // // </p>

// // // </div>


// // // <!-- FOOTER -->

// // // <div
// // //   style="
// // //     background:#fafafa;
// // //     padding:20px;
// // //     text-align:center;
// // //     color:#777;
// // //     font-size:13px;
// // //   "
// // // >

// // // © ${new Date().getFullYear()} I TECH AI

// // // </div>


// // // </div>

// // // </body>

// // // </html>
// // // `,
// // //   };

// // //   await transporter.sendMail(mailOptions);
// // // }


// // // /* =========================================================
// // //    WEBINAR DATES
// // // ========================================================= */

// // // const webinarDates = [

// // //   "2026-09-08T20:00:00+05:30",

// // //   "2026-09-09T20:00:00+05:30",

// // //   "2026-09-10T20:00:00+05:30",

// // // ];


// // // /* =========================================================
// // //    REMINDER EMAIL
// // // ========================================================= */

// // // async function sendReminderEmail(lead) {

// // //   const mailOptions = {

// // //     from:
// // //       `"I TECH AI" <${EMAIL_USER}>`,

// // //     to:
// // //       lead.email,

// // //     subject:
// // //       "⏰ Webinar Starts in 30 Minutes | I TECH AI",

// // //     html: `
// // // <!DOCTYPE html>

// // // <html>

// // // <head>

// // // <meta charset="UTF-8">

// // // <meta
// // //   name="viewport"
// // //   content="width=device-width, initial-scale=1.0"
// // // >

// // // </head>


// // // <body
// // //   style="
// // //     margin:0;
// // //     padding:0;
// // //     background:#f5f5f5;
// // //     font-family:Arial,Helvetica,sans-serif;
// // //   "
// // // >


// // // <div
// // //   style="
// // //     max-width:600px;
// // //     margin:30px auto;
// // //     background:white;
// // //     border-radius:12px;
// // //     overflow:hidden;
// // //   "
// // // >


// // // <!-- HEADER -->

// // // <div
// // //   style="
// // //     background:#f97316;
// // //     color:white;
// // //     padding:25px;
// // //     text-align:center;
// // //   "
// // // >

// // // <h1 style="margin:0;">
// // //   ⏰ Webinar Reminder
// // // </h1>

// // // <p style="margin:10px 0 0;">
// // //   I TECH AI
// // // </p>

// // // </div>


// // // <!-- CONTENT -->

// // // <div style="padding:30px;">

// // // <p>
// // //   Hello <strong>${escapeHtml(lead.name)}</strong> 👋
// // // </p>


// // // <p>

// // // Your I TECH AI webinar is starting in approximately
// // // <strong>30 minutes</strong>.

// // // </p>


// // // <!-- DETAILS -->

// // // <div
// // //   style="
// // //     background:#fff7ed;
// // //     padding:18px;
// // //     border-radius:8px;
// // //     margin:20px 0;
// // //   "
// // // >

// // // <p>

// // // 📅
// // // <strong>
// // // 8th, 9th & 10th September 2026
// // // </strong>

// // // </p>


// // // <p>

// // // 🕗
// // // <strong>
// // // 8:00 PM – 9:00 PM
// // // </strong>

// // // </p>


// // // <p>

// // // 💻
// // // <strong>
// // // Google Meet
// // // </strong>

// // // </p>

// // // </div>


// // // <!-- MEET BUTTON -->

// // // <div
// // //   style="
// // //     text-align:center;
// // //     margin:25px 0;
// // //   "
// // // >

// // // <a
// // //   href="${WEBINAR_MEETING_LINK}"
// // //   target="_blank"
// // //   style="
// // //     display:inline-block;
// // //     background:#f97316;
// // //     color:white;
// // //     text-decoration:none;
// // //     padding:15px 28px;
// // //     border-radius:8px;
// // //     font-weight:bold;
// // //   "
// // // >

// // // 🎥 JOIN GOOGLE MEET

// // // </a>

// // // </div>


// // // <!-- WHATSAPP BUTTON -->

// // // <div
// // //   style="
// // //     text-align:center;
// // //     margin:25px 0;
// // //   "
// // // >

// // // <a
// // //   href="${WHATSAPP_COMMUNITY_LINK}"
// // //   target="_blank"
// // //   style="
// // //     display:inline-block;
// // //     background:#16a34a;
// // //     color:white;
// // //     text-decoration:none;
// // //     padding:15px 28px;
// // //     border-radius:8px;
// // //     font-weight:bold;
// // //   "
// // // >

// // // 💬 JOIN WHATSAPP CHANNEL

// // // </a>

// // // </div>


// // // <p>

// // // Please join a few minutes before the session starts.

// // // </p>


// // // <p>

// // // See you inside the webinar! 🎓

// // // </p>


// // // <p>

// // // Regards,<br>

// // // <strong>I TECH AI Team</strong>

// // // </p>

// // // </div>


// // // <!-- FOOTER -->

// // // <div
// // //   style="
// // //     background:#fafafa;
// // //     padding:20px;
// // //     text-align:center;
// // //     color:#777;
// // //     font-size:13px;
// // //   "
// // // >

// // // © ${new Date().getFullYear()} I TECH AI

// // // </div>


// // // </div>

// // // </body>

// // // </html>
// // // `,
// // //   };


// // //   await transporter.sendMail(mailOptions);
// // // }


// // // /* =========================================================
// // //    HEALTH CHECK
// // // ========================================================= */

// // // // app.get("/", (req, res) => {

// // // //   res.json({

// // // //     success: true,

// // // //     message:
// // // //       "I TECH AI Webinar Backend is running 🚀",

// // // //     webinarDates,

// // // //     webinarMeetingLink:
// // // //       WEBINAR_MEETING_LINK,

// // // //     whatsappCommunityLink:
// // // //       WHATSAPP_COMMUNITY_LINK,

// // // //   });

// // // // });

// // // app.get("/", (req, res) => {
// // //   res.sendFile(path.join(__dirname, "index1.html"));
// // // });

// // // /* =========================================================
// // //    CREATE LEAD
// // // ========================================================= */

// // // app.post("/api/leads", async (req, res) => {

// // //   try {

// // //     const {
// // //       name,
// // //       phone,
// // //       email,
// // //       state,
// // //       communityJoined,
// // //     } = req.body;


// // //     /* VALIDATION */

// // //     if (
// // //       !name ||
// // //       !phone ||
// // //       !email ||
// // //       !state
// // //     ) {

// // //       return res.status(400).json({

// // //         success: false,

// // //         message:
// // //           "Name, phone, email and state are required.",

// // //       });

// // //     }


// // //     /* COMMUNITY VALIDATION */

// // //     if (communityJoined !== true) {

// // //       return res.status(400).json({

// // //         success: false,

// // //         message:
// // //           "Please join the WhatsApp Channel before submitting the form.",

// // //         whatsappCommunityLink:
// // //           WHATSAPP_COMMUNITY_LINK,

// // //       });

// // //     }


// // //     /* NORMALIZE PHONE */

// // //     const normalizedPhone =
// // //       String(phone)
// // //         .replace(/\D/g, "")
// // //         .slice(-10);


// // //     if (
// // //       normalizedPhone.length !== 10
// // //     ) {

// // //       return res.status(400).json({

// // //         success: false,

// // //         message:
// // //           "Please enter a valid 10-digit WhatsApp number.",

// // //       });

// // //     }


// // //     /* CHECK DUPLICATE */

// // //     const existingLead =
// // //       await Lead.findOne({
// // //         phone: normalizedPhone,
// // //       });


// // //     if (existingLead) {

// // //       return res.status(409).json({

// // //         success: false,

// // //         message:
// // //           "This WhatsApp number is already registered for the webinar.",

// // //         webinarMeetingLink:
// // //           WEBINAR_MEETING_LINK,

// // //         whatsappCommunityLink:
// // //           WHATSAPP_COMMUNITY_LINK,

// // //       });

// // //     }


// // //     /* CREATE LEAD */

// // //     const lead =
// // //       new Lead({

// // //         name:
// // //           String(name).trim(),

// // //         phone:
// // //           normalizedPhone,

// // //         email:
// // //           String(email)
// // //             .trim()
// // //             .toLowerCase(),

// // //         state:
// // //           String(state).trim(),

// // //         communityJoined:
// // //           true,

// // //         communityJoinDate:
// // //           new Date(),

// // //         registrationDate:
// // //           new Date(),

// // //       });


// // //     await lead.save();


// // //     /* SEND REGISTRATION EMAIL */

// // //     let emailSent = false;


// // //     try {

// // //       await sendRegistrationEmail(
// // //         lead
// // //       );


// // //       lead.zoomEmailSent =
// // //         true;


// // //       await lead.save();


// // //       emailSent = true;


// // //       console.log(
// // //         `📧 Registration email sent to ${lead.email}`
// // //       );


// // //     } catch (emailError) {

// // //       console.error(
// // //         "❌ Registration email failed:",
// // //         emailError.message
// // //       );

// // //     }


// // //     /* RESPONSE */

// // //     return res.status(201).json({

// // //       success: true,

// // //       message:
// // //         emailSent
// // //           ? "Registration successful! Webinar and WhatsApp links have been sent to your email."
// // //           : "Registration successful! Webinar and WhatsApp links are ready.",

// // //       webinarMeetingLink:
// // //         WEBINAR_MEETING_LINK,

// // //       whatsappCommunityLink:
// // //         WHATSAPP_COMMUNITY_LINK,

// // //       emailSent,

// // //     });


// // //   } catch (error) {

// // //     console.error(
// // //       "❌ Lead creation error:"
// // //     );

// // //     console.error(error);


// // //     if (
// // //       error.code === 11000
// // //     ) {

// // //       return res.status(409).json({

// // //         success: false,

// // //         message:
// // //           "This WhatsApp number is already registered.",

// // //         webinarMeetingLink:
// // //           WEBINAR_MEETING_LINK,

// // //         whatsappCommunityLink:
// // //           WHATSAPP_COMMUNITY_LINK,

// // //       });

// // //     }


// // //     return res.status(500).json({

// // //       success: false,

// // //       message:
// // //         "Server error. Please try again later.",

// // //     });

// // //   }

// // // });


// // // /* =========================================================
// // //    GET ALL LEADS
// // // ========================================================= */

// // // app.get("/api/leads", async (req, res) => {

// // //   try {

// // //     const leads =
// // //       await Lead
// // //         .find()
// // //         .sort({
// // //           registrationDate: -1,
// // //         })
// // //         .lean();


// // //     const total =
// // //       leads.length;


// // //     const communityJoined =
// // //       leads.filter(
// // //         (lead) =>
// // //           lead.communityJoined === true
// // //       ).length;


// // //     const zoomEmailSent =
// // //       leads.filter(
// // //         (lead) =>
// // //           lead.zoomEmailSent === true
// // //       ).length;


// // //     const zoomReminderSent =
// // //       leads.filter(
// // //         (lead) =>
// // //           lead.zoomReminderSent === true
// // //       ).length;


// // //     return res.json({

// // //       success: true,

// // //       total,

// // //       communityJoined,

// // //       zoomEmailSent,

// // //       zoomReminderSent,

// // //       webinarMeetingLink:
// // //         WEBINAR_MEETING_LINK,

// // //       whatsappCommunityLink:
// // //         WHATSAPP_COMMUNITY_LINK,

// // //       data:
// // //         leads,

// // //     });


// // //   } catch (error) {

// // //     console.error(
// // //       "❌ Error fetching leads:",
// // //       error.message
// // //     );


// // //     return res.status(500).json({

// // //       success: false,

// // //       message:
// // //         "Unable to fetch leads.",

// // //     });

// // //   }

// // // });


// // // /* =========================================================
// // //    GET SINGLE LEAD
// // // ========================================================= */

// // // app.get(
// // //   "/api/leads/:phone",
// // //   async (req, res) => {

// // //     try {

// // //       const normalizedPhone =
// // //         String(req.params.phone)
// // //           .replace(/\D/g, "")
// // //           .slice(-10);


// // //       const lead =
// // //         await Lead
// // //           .findOne({
// // //             phone:
// // //               normalizedPhone,
// // //           })
// // //           .lean();


// // //       if (!lead) {

// // //         return res.status(404).json({

// // //           success: false,

// // //           message:
// // //             "Lead not found.",

// // //         });

// // //       }


// // //       return res.json({

// // //         success: true,

// // //         webinarMeetingLink:
// // //           WEBINAR_MEETING_LINK,

// // //         whatsappCommunityLink:
// // //           WHATSAPP_COMMUNITY_LINK,

// // //         data:
// // //           lead,

// // //       });


// // //     } catch (error) {

// // //       console.error(
// // //         "❌ Error fetching lead:",
// // //         error.message
// // //       );


// // //       return res.status(500).json({

// // //         success: false,

// // //         message:
// // //           "Server error.",

// // //       });

// // //     }

// // //   }
// // // );


// // // /* =========================================================
// // //    TEST EMAIL
// // // ========================================================= */

// // // app.post(
// // //   "/api/test-email",
// // //   async (req, res) => {

// // //     try {

// // //       const {
// // //         email
// // //       } = req.body;


// // //       if (!email) {

// // //         return res.status(400).json({

// // //           success: false,

// // //           message:
// // //             "Email is required.",

// // //         });

// // //       }


// // //       const testLead = {

// // //         name:
// // //           "Test User",

// // //         email,

// // //       };


// // //       await sendRegistrationEmail(
// // //         testLead
// // //       );


// // //       return res.json({

// // //         success: true,

// // //         message:
// // //           "Test email sent successfully.",

// // //       });


// // //     } catch (error) {

// // //       console.error(
// // //         "❌ Test email failed:",
// // //         error.message
// // //       );


// // //       return res.status(500).json({

// // //         success: false,

// // //         message:
// // //           "Test email failed.",

// // //         error:
// // //           error.message,

// // //       });

// // //     }

// // //   }
// // // );


// // // /* =========================================================
// // //    REMINDER SCHEDULER
// // // ========================================================= */

// // // async function checkAndSendReminders() {

// // //   try {

// // //     const now =
// // //       new Date();


// // //     for (
// // //       const webinarDateString
// // //       of webinarDates
// // //     ) {

// // //       const webinarDate =
// // //         new Date(
// // //           webinarDateString
// // //         );


// // //       const reminderTime =
// // //         new Date(
// // //           webinarDate.getTime() -
// // //           30 * 60 * 1000
// // //         );


// // //       const currentDifference =
// // //         Math.abs(
// // //           now.getTime() -
// // //           reminderTime.getTime()
// // //         );


// // //       /*
// // //        * Reminder window:
// // //        * 1 minute
// // //        */

// // //       if (
// // //         currentDifference <=
// // //         60 * 1000
// // //       ) {

// // //         console.log(
// // //           `⏰ Reminder window reached for ${webinarDateString}`
// // //         );


// // //         /*
// // //          * IMPORTANT:
// // //          * Only send reminder to users
// // //          * who have not received it yet.
// // //          */

// // //         const leads =
// // //           await Lead.find({

// // //             zoomEmailSent:
// // //               true,

// // //             zoomReminderSent:
// // //               false,

// // //           });


// // //         console.log(
// // //           `📧 Sending reminders to ${leads.length} users`
// // //         );


// // //         for (
// // //           const lead
// // //           of leads
// // //         ) {

// // //           try {

// // //             await sendReminderEmail(
// // //               lead
// // //             );


// // //             lead.zoomReminderSent =
// // //               true;


// // //             await lead.save();


// // //             console.log(
// // //               `📧 Reminder sent to ${lead.email}`
// // //             );


// // //           } catch (error) {

// // //             console.error(
// // //               `❌ Reminder failed for ${lead.email}:`,
// // //               error.message
// // //             );

// // //           }

// // //         }

// // //       }

// // //     }

// // //   } catch (error) {

// // //     console.error(
// // //       "❌ Reminder scheduler error:",
// // //       error.message
// // //     );

// // //   }

// // // }


// // // /* =========================================================
// // //    START REMINDER CHECK
// // // ========================================================= */

// // // setInterval(
// // //   checkAndSendReminders,
// // //   60 * 1000
// // // );


// // // /* =========================================================
// // //    START SERVER
// // // ========================================================= */

// // // app.listen(
// // //   PORT,
// // //   () => {

// // //     console.log("");

// // //     console.log(
// // //       "======================================"
// // //     );

// // //     console.log(
// // //       "🚀 I TECH AI WEBINAR BACKEND"
// // //     );

// // //     console.log(
// // //       "======================================"
// // //     );

// // //     console.log(
// // //       `🌐 Server: http://localhost:${PORT}`
// // //     );

// // //     console.log(
// // //       `📋 Leads: http://localhost:${PORT}/api/leads`
// // //     );

// // //     console.log(
// // //       "📧 Email system: enabled"
// // //     );

// // //     console.log(
// // //       `🎥 Google Meet: ${WEBINAR_MEETING_LINK}`
// // //     );

// // //     console.log(
// // //       `💬 WhatsApp Channel: ${WHATSAPP_COMMUNITY_LINK}`
// // //     );

// // //     console.log(
// // //       "⏰ Reminder scheduler: running"
// // //     );

// // //     console.log(
// // //       "======================================"
// // //     );

// // //     console.log("");

// // //     verifyEmailConfiguration();

// // //   }
// // // );
// // // // document.addEventListener("DOMContentLoaded", function () {

// // // //     const faqQuestions = document.querySelectorAll(".faq-question");

// // // //     faqQuestions.forEach(function (question) {

// // // //         question.addEventListener("click", function () {

// // // //             const currentItem = this.closest(".faq-item");

// // // //             document.querySelectorAll(".faq-item").forEach(function (item) {

// // // //                 if (item !== currentItem) {
// // // //                     item.classList.remove("active");
// // // //                 }

// // // //             });

// // // //             currentItem.classList.toggle("active");

// // // //         });

// // // //     });

// // // // });


// // const express = require("express");
// // const path = require("path");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");
// // const { google } = require("googleapis");
// // require("dotenv").config();

// // const app = express();

// // /* =========================================================
// //    MIDDLEWARE
// // ========================================================= */

// // app.use(
// //   cors({
// //     origin: "*",
// //   })
// // );

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use(express.static(__dirname));

// // /* =========================================================
// //    CONFIGURATION
// // ========================================================= */

// // const PORT = process.env.PORT || 5000;

// // const MONGO_URI = process.env.MONGO_URI;
// // const EMAIL_USER = process.env.EMAIL_USER;
// // const EMAIL_PASS = process.env.EMAIL_PASS;

// // /*
// //    GOOGLE SHEETS
// //    GOOGLE_SHEET_ID = Sheet URL ke /d/ aur /edit ke beech wala ID

// //    Example:
// //    https://docs.google.com/spreadsheets/d/ABC123XYZ/edit

// //    GOOGLE_SHEET_ID:
// //    ABC123XYZ
// // */

// // const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

// // /*
// //    Service account credentials ke liye Render me:
// //    GOOGLE_SERVICE_ACCOUNT_EMAIL
// //    GOOGLE_PRIVATE_KEY

// //    Private key ko Render environment variable me ek line me paste karna hai.
// // */

// // const GOOGLE_SERVICE_ACCOUNT_EMAIL =
// //   process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

// // const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
// //   ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
// //   : null;

// // /* =========================================================
// //    WEBINAR CONFIG
// // ========================================================= */

// // const WEBINAR_MEETING_LINK =
// //   "https://meet.google.com/uca-deoe-vnh?hs=151";

// // const WHATSAPP_COMMUNITY_LINK =
// //   "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";

// // /* =========================================================
// //    WEBINAR DATES
// // ========================================================= */

// // const webinarDates = [
// //   "2026-09-08T20:00:00+05:30",
// //   "2026-09-09T20:00:00+05:30",
// //   "2026-09-10T20:00:00+05:30",
// // ];

// // /* =========================================================
// //    ENV CHECK
// // ========================================================= */

// // console.log("\n========================================");
// // console.log("       I TECH AI WEBINAR BACKEND");
// // console.log("========================================");

// // console.log(
// //   "MONGO_URI:",
// //   MONGO_URI ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log(
// //   "EMAIL_USER:",
// //   EMAIL_USER ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log(
// //   "EMAIL_PASS:",
// //   EMAIL_PASS ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log(
// //   "GOOGLE_SHEET_ID:",
// //   GOOGLE_SHEET_ID ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log(
// //   "GOOGLE_SERVICE_ACCOUNT_EMAIL:",
// //   GOOGLE_SERVICE_ACCOUNT_EMAIL ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log(
// //   "GOOGLE_PRIVATE_KEY:",
// //   GOOGLE_PRIVATE_KEY ? "✅ Loaded" : "❌ Missing"
// // );

// // console.log("========================================\n");

// // /* =========================================================
// //    MONGODB CONNECTION
// // ========================================================= */

// // if (!MONGO_URI) {
// //   console.error("❌ MONGO_URI is missing.");
// // } else {
// //   mongoose
// //     .connect(MONGO_URI, {
// //       serverSelectionTimeoutMS: 10000,
// //       connectTimeoutMS: 10000,
// //     })
// //     .then(() => {
// //       console.log("========================================");
// //       console.log("✅ MONGODB CONNECTED");
// //       console.log("📦 Database:", mongoose.connection.name);
// //       console.log("🖥️ Host:", mongoose.connection.host);
// //       console.log("========================================");
// //     })
// //     .catch((error) => {
// //       console.error("❌ MongoDB connection error:");
// //       console.error(error.message);
// //     });
// // }

// // mongoose.connection.on("connected", () => {
// //   console.log("🟢 MongoDB connection established");
// // });

// // mongoose.connection.on("error", (error) => {
// //   console.error("🔴 MongoDB error:", error.message);
// // });

// // mongoose.connection.on("disconnected", () => {
// //   console.log("🟡 MongoDB disconnected");
// // });

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
// //       lowercase: true,
// //       trim: true,
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
// //    NODEMAILER
// // ========================================================= */

// // // let transporter = null;

// // // if (EMAIL_USER && EMAIL_PASS) {
// // //   transporter = nodemailer.createTransport({
// // //     service: "gmail",
// // //     host: "smtp.gmail.com",
// // //     port: 587,
// // //     secure: false,

// // //     auth: {
// // //       user: EMAIL_USER,
// // //       pass: EMAIL_PASS,
// // //     },
// // //     family: 4,


// // //     connectionTimeout: 10000,
// // //     greetingTimeout: 10000,
// // //     socketTimeout: 15000,
// // //   });
// // // }

// // let transporter = null;

// // if (EMAIL_USER && EMAIL_PASS) {
// //   transporter = nodemailer.createTransport({
// //     host: "smtp.gmail.com",
// //     port: 587,
// //     secure: false,

// //     auth: {
// //       user: EMAIL_USER,
// //       pass: EMAIL_PASS,
// //     },

// //     connectionTimeout: 15000,
// //     greetingTimeout: 15000,
// //     socketTimeout: 20000,
// //   });
// // }


// // /* =========================================================
// //    EMAIL VERIFICATION
// // ========================================================= */

// // async function verifyEmailConfiguration() {
// //   if (!transporter) {
// //     console.log("⚠️ Email transporter not configured.");
// //     return;
// //   }

// //   try {
// //     await transporter.verify();

// //     console.log("========================================");
// //     console.log("✅ EMAIL SERVICE READY");
// //     console.log("📧 Email:", EMAIL_USER);
// //     console.log("========================================");
// //   } catch (error) {
// //     console.error("========================================");
// //     console.error("❌ EMAIL SERVICE ERROR");
// //     console.error(error.message);
// //     console.error("========================================");
// //   }
// // }

// // /* =========================================================
// //    REGISTRATION EMAIL
// // ========================================================= */

// // async function sendRegistrationEmail(lead) {
// //   if (!transporter) {
// //     throw new Error("Email transporter is not configured.");
// //   }

// //   const mailOptions = {
// //     from: `"I TECH AI" <${EMAIL_USER}>`,
// //     to: lead.email,
// //     subject: "🎉 Your I TECH AI Webinar Registration is Confirmed",

// //     html: `
// //       <div style="
// //         font-family: Arial, sans-serif;
// //         max-width: 650px;
// //         margin: auto;
// //         padding: 25px;
// //         border: 1px solid #ddd;
// //         border-radius: 12px;
// //       ">

// //         <h2 style="margin-bottom:10px;">
// //           🎉 Registration Successful!
// //         </h2>

// //         <p>Hi <strong>${lead.name}</strong>,</p>

// //         <p>
// //           Your registration for the
// //           <strong>I TECH AI Webinar</strong>
// //           has been successfully completed.
// //         </p>

// //         <div style="
// //           background:#f5f5f5;
// //           padding:15px;
// //           border-radius:10px;
// //           margin:20px 0;
// //         ">

// //           <p>
// //             <strong>Name:</strong> ${lead.name}
// //           </p>

// //           <p>
// //             <strong>Email:</strong> ${lead.email}
// //           </p>

// //           <p>
// //             <strong>Phone:</strong> ${lead.phone}
// //           </p>

// //           <p>
// //             <strong>State:</strong> ${lead.state}
// //           </p>

// //         </div>

// //         <p>
// //           Join the webinar using the link below:
// //         </p>

// //         <a
// //           href="${WEBINAR_MEETING_LINK}"
// //           style="
// //             display:inline-block;
// //             padding:12px 20px;
// //             background:#111;
// //             color:white;
// //             text-decoration:none;
// //             border-radius:8px;
// //           "
// //         >
// //           🚀 Join Webinar
// //         </a>

// //         <br><br>

// //         <a
// //           href="${WHATSAPP_COMMUNITY_LINK}"
// //           style="
// //             display:inline-block;
// //             padding:12px 20px;
// //             background:#25D366;
// //             color:white;
// //             text-decoration:none;
// //             border-radius:8px;
// //           "
// //         >
// //           💬 Join WhatsApp Channel
// //         </a>

// //         <p style="margin-top:25px;">
// //           See you in the webinar! 🚀
// //         </p>

// //         <p>
// //           <strong>I TECH AI Team</strong>
// //         </p>

// //       </div>
// //     `,
// //   };

// //   const info = await transporter.sendMail(mailOptions);

// //   console.log(
// //     `📧 Registration email sent to ${lead.email}`
// //   );

// //   return info;
// // }

// // /* =========================================================
// //    GOOGLE SHEETS AUTH
// // ========================================================= */

// // let sheets = null;

// // function initializeGoogleSheets() {
// //   if (
// //     !GOOGLE_SHEET_ID ||
// //     !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
// //     !GOOGLE_PRIVATE_KEY
// //   ) {
// //     console.log(
// //       "⚠️ Google Sheets is not fully configured."
// //     );

// //     return;
// //   }

// //   try {
// //     const auth = new google.auth.GoogleAuth({
// //       credentials: {
// //         client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
// //         private_key: GOOGLE_PRIVATE_KEY,
// //       },

// //       scopes: [
// //         "https://www.googleapis.com/auth/spreadsheets",
// //       ],
// //     });

// //     sheets = google.sheets({
// //       version: "v4",
// //       auth,
// //     });

// //     console.log("========================================");
// //     console.log("✅ GOOGLE SHEETS SERVICE READY");
// //     console.log("📊 Sheet ID:", GOOGLE_SHEET_ID);
// //     console.log("========================================");
// //   } catch (error) {
// //     console.error(
// //       "❌ Google Sheets initialization error:",
// //       error.message
// //     );
// //   }
// // }

// // initializeGoogleSheets();

// // /* =========================================================
// //    ADD LEAD TO GOOGLE SHEET
// // ========================================================= */

// // async function addLeadToGoogleSheet(lead) {
// //   if (!sheets || !GOOGLE_SHEET_ID) {
// //     throw new Error(
// //       "Google Sheets is not configured."
// //     );
// //   }

// //   /*
// //     Sheet ke first tab ka naam normally Sheet1 hota hai.

// //     Hum A:H columns me data add karenge.
// //   */

// //   const values = [
// //     [
// //       lead.name,
// //       lead.phone,
// //       lead.email,
// //       lead.state,
// //       lead.communityJoined ? "Yes" : "No",
// //       lead.registrationDate
// //         ? new Date(lead.registrationDate).toLocaleString(
// //             "en-IN",
// //             {
// //               timeZone: "Asia/Kolkata",
// //             }
// //           )
// //         : "",
// //       lead.zoomEmailSent ? "Yes" : "No",
// //       lead.zoomReminderSent ? "Yes" : "No",
// //     ],
// //   ];

// //   const response = await sheets.spreadsheets.values.append({
// //     spreadsheetId: GOOGLE_SHEET_ID,

// //     range: "Sheet1!A:H",

// //     valueInputOption: "USER_ENTERED",

// //     insertDataOption: "INSERT_ROWS",

// //     requestBody: {
// //       values,
// //     },
// //   });

// //   console.log("========================================");
// //   console.log("✅ GOOGLE SHEET UPDATED");
// //   console.log("👤 Lead:", lead.name);
// //   console.log("📧 Email:", lead.email);
// //   console.log(
// //     "📊 Updated range:",
// //     response.data.updates?.updatedRange
// //   );
// //   console.log("========================================");

// //   return response;
// // }

// // /* =========================================================
// //    HEALTH CHECK
// // ========================================================= */

// // app.get("/health", (req, res) => {
// //   res.json({
// //     success: true,

// //     server: "I TECH AI Webinar Backend",

// //     mongodb: {
// //       connected:
// //         mongoose.connection.readyState === 1,

// //       database:
// //         mongoose.connection.name || null,
// //     },

// //     email: {
// //       configured:
// //         Boolean(EMAIL_USER && EMAIL_PASS),

// //       serviceReady:
// //         Boolean(transporter),
// //     },

// //     googleSheets: {
// //       configured:
// //         Boolean(
// //           GOOGLE_SHEET_ID &&
// //             GOOGLE_SERVICE_ACCOUNT_EMAIL &&
// //             GOOGLE_PRIVATE_KEY
// //         ),

// //       sheetId:
// //         GOOGLE_SHEET_ID
// //           ? "configured"
// //           : null,
// //     },

// //     webinarDates,

// //     webinarMeetingLink:
// //       WEBINAR_MEETING_LINK,

// //     whatsappCommunityLink:
// //       WHATSAPP_COMMUNITY_LINK,
// //   });
// // });

// // /* =========================================================
// //    ROOT ROUTE
// // ========================================================= */

// // app.get("/", (req, res) => {
// //   const filePath = path.join(
// //     __dirname,
// //     "index1.html"
// //   );

// //   res.sendFile(filePath, (error) => {
// //     if (error) {
// //       console.error(
// //         "❌ Could not load index1.html:",
// //         error.message
// //       );

// //       res.status(404).send(
// //         "index1.html not found."
// //       );
// //     }
// //   });
// // });

// // /* =========================================================
// //    POST /api/leads
// // ========================================================= */

// // app.post("/api/leads", async (req, res) => {
// //   try {
// //     console.log("\n========================================");
// //     console.log("📥 NEW LEAD REQUEST");
// //     console.log("========================================");

// //     const {
// //       name,
// //       phone,
// //       email,
// //       state,
// //       communityJoined,
// //     } = req.body;

// //     /* -----------------------------------------
// //        VALIDATION
// //     ----------------------------------------- */

// //     if (
// //       !name ||
// //       !phone ||
// //       !email ||
// //       !state
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Name, phone, email and state are required.",
// //       });
// //     }

// //     if (communityJoined !== true) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Please confirm that you joined the community.",
// //       });
// //     }

// //     /* -----------------------------------------
// //        MONGODB CHECK
// //     ----------------------------------------- */

// //     if (mongoose.connection.readyState !== 1) {
// //       console.error(
// //         "❌ MongoDB is not connected."
// //       );

// //       return res.status(503).json({
// //         success: false,
// //         message:
// //           "Database is currently unavailable. Please try again.",
// //       });
// //     }

// //     /* -----------------------------------------
// //        NORMALIZE PHONE
// //     ----------------------------------------- */

// //     const normalizedPhone = String(phone)
// //       .replace(/\D/g, "")
// //       .slice(-10);

// //     if (normalizedPhone.length !== 10) {
// //       return res.status(400).json({
// //         success: false,
// //         message:
// //           "Please enter a valid 10 digit phone number.",
// //       });
// //     }

// //     /* -----------------------------------------
// //        DUPLICATE CHECK
// //     ----------------------------------------- */

// //     const existingLead =
// //       await Lead.findOne({
// //         phone: normalizedPhone,
// //       });

// //     if (existingLead) {
// //       console.log(
// //         "⚠️ Duplicate lead:",
// //         normalizedPhone
// //       );

// //       return res.status(409).json({
// //         success: false,
// //         message:
// //           "This phone number is already registered.",
// //       });
// //     }

// //     /* -----------------------------------------
// //        CREATE LEAD
// //     ----------------------------------------- */

// //     const lead = new Lead({
// //       name: String(name).trim(),

// //       phone: normalizedPhone,

// //       email: String(email)
// //         .trim()
// //         .toLowerCase(),

// //       state: String(state).trim(),

// //       communityJoined: true,

// //       communityJoinDate: new Date(),

// //       registrationDate: new Date(),
// //     });

// //     /* -----------------------------------------
// //        SAVE TO MONGODB
// //     ----------------------------------------- */

// //     console.log(
// //       "💾 Saving lead to MongoDB..."
// //     );

// //     await lead.save();

// //     console.log("========================================");
// //     console.log("✅ LEAD SAVED");
// //     console.log("👤 Name:", lead.name);
// //     console.log("📱 Phone:", lead.phone);
// //     console.log("📧 Email:", lead.email);
// //     console.log(
// //       "📦 Database:",
// //       mongoose.connection.name
// //     );
// //     console.log("========================================");

// //     /* -----------------------------------------
// //        GOOGLE SHEET BACKGROUND SYNC
// //     ----------------------------------------- */

// //     addLeadToGoogleSheet(lead)
// //       .catch((error) => {
// //         console.error(
// //           "❌ GOOGLE SHEET SYNC FAILED"
// //         );

// //         console.error(error.message);
// //       });

// //     /* -----------------------------------------
// //        EMAIL BACKGROUND SEND
// //     ----------------------------------------- */

// //     sendRegistrationEmail(lead)
// //       .then(async () => {
// //         try {
// //           await Lead.updateOne(
// //             {
// //               _id: lead._id,
// //             },
// //             {
// //               $set: {
// //                 zoomEmailSent: true,
// //               },
// //             }
// //           );

// //           console.log(
// //             `✅ Email status updated for ${lead.email}`
// //           );
// //         } catch (error) {
// //           console.error(
// //             "❌ Could not update email status:",
// //             error.message
// //           );
// //         }
// //       })
// //       .catch((error) => {
// //         console.error(
// //           "❌ REGISTRATION EMAIL FAILED"
// //         );

// //         console.error(error.message);
// //       });

// //     /* -----------------------------------------
// //        RESPONSE
// //     ----------------------------------------- */

// //     return res.status(201).json({
// //       success: true,

// //       message:
// //         "Registration successful! Webinar and WhatsApp links are ready.",

// //       webinarMeetingLink:
// //         WEBINAR_MEETING_LINK,

// //       whatsappCommunityLink:
// //         WHATSAPP_COMMUNITY_LINK,

// //       emailSent: false,

// //       googleSheetSync:
// //         Boolean(sheets && GOOGLE_SHEET_ID),
// //     });
// //   } catch (error) {
// //     console.error(
// //       "❌ LEAD REGISTRATION ERROR"
// //     );

// //     console.error(error);

// //     /* -----------------------------------------
// //        DUPLICATE KEY ERROR
// //     ----------------------------------------- */

// //     if (error.code === 11000) {
// //       return res.status(409).json({
// //         success: false,
// //         message:
// //           "This phone number is already registered.",
// //       });
// //     }

// //     return res.status(500).json({
// //       success: false,
// //       message:
// //         "Registration failed. Please try again.",
// //     });
// //   }
// // });

// // /* =========================================================
// //    GET ALL LEADS
// // ========================================================= */

// // app.get("/api/leads", async (req, res) => {
// //   try {
// //     if (mongoose.connection.readyState !== 1) {
// //       return res.status(503).json({
// //         success: false,
// //         message:
// //           "Database is not connected.",
// //       });
// //     }

// //     const leads = await Lead.find()
// //       .sort({
// //         createdAt: -1,
// //       })
// //       .lean();

// //     res.json({
// //       success: true,

// //       database:
// //         mongoose.connection.name,

// //       count: leads.length,

// //       leads,
// //     });
// //   } catch (error) {
// //     console.error(
// //       "❌ GET LEADS ERROR:",
// //       error.message
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Unable to fetch leads.",
// //     });
// //   }
// // });

// // /* =========================================================
// //    GET LEAD BY PHONE
// // ========================================================= */

// // app.get(
// //   "/api/leads/:phone",
// //   async (req, res) => {
// //     try {
// //       if (
// //         mongoose.connection.readyState !== 1
// //       ) {
// //         return res.status(503).json({
// //           success: false,
// //           message:
// //             "Database is not connected.",
// //         });
// //       }

// //       const normalizedPhone =
// //         String(req.params.phone)
// //           .replace(/\D/g, "")
// //           .slice(-10);

// //       const lead = await Lead.findOne({
// //         phone: normalizedPhone,
// //       }).lean();

// //       if (!lead) {
// //         return res.status(404).json({
// //           success: false,
// //           message: "Lead not found.",
// //         });
// //       }

// //       res.json({
// //         success: true,
// //         lead,
// //       });
// //     } catch (error) {
// //       console.error(
// //         "❌ GET LEAD ERROR:",
// //         error.message
// //       );

// //       res.status(500).json({
// //         success: false,
// //         message:
// //           "Unable to fetch lead.",
// //       });
// //     }
// //   }
// // );

// // /* =========================================================
// //    TEST EMAIL
// // ========================================================= */

// // app.post(
// //   "/api/test-email",
// //   async (req, res) => {
// //     try {
// //       const { email } = req.body;

// //       if (!email) {
// //         return res.status(400).json({
// //           success: false,
// //           message:
// //             "Test email address is required.",
// //         });
// //       }

// //       if (!transporter) {
// //         return res.status(500).json({
// //           success: false,
// //           message:
// //             "Email transporter is not configured.",
// //         });
// //       }

// //       console.log(
// //         `📧 Sending test email to ${email}`
// //       );

// //       const info =
// //         await transporter.sendMail({
// //           from: `"I TECH AI" <${EMAIL_USER}>`,
// //           to: email,
// //           subject:
// //             "I TECH AI Test Email",

// //           html: `
// //             <h2>✅ Email Working</h2>

// //             <p>
// //               This is a test email from
// //               I TECH AI Webinar Backend.
// //             </p>
// //           `,
// //         });

// //       res.json({
// //         success: true,

// //         message:
// //           "Test email sent successfully.",

// //         messageId:
// //           info.messageId,
// //       });
// //     } catch (error) {
// //       console.error(
// //         "❌ TEST EMAIL ERROR"
// //       );

// //       console.error(error);

// //       res.status(500).json({
// //         success: false,

// //         message:
// //           "Test email failed.",

// //         error:
// //           error.message,
// //       });
// //     }
// //   }
// // );

// // /* =========================================================
// //    REMINDER EMAIL
// // ========================================================= */

// // async function sendReminderEmail(lead) {
// //   if (!transporter) {
// //     throw new Error(
// //       "Email transporter is not configured."
// //     );
// //   }

// //   await transporter.sendMail({
// //     from: `"I TECH AI" <${EMAIL_USER}>`,
// //     to: lead.email,

// //     subject:
// //       "⏰ I TECH AI Webinar Reminder",

// //     html: `
// //       <div style="
// //         font-family:Arial,sans-serif;
// //         max-width:650px;
// //         margin:auto;
// //         padding:25px;
// //       ">

// //         <h2>
// //           ⏰ Webinar Reminder
// //         </h2>

// //         <p>
// //           Hi <strong>${lead.name}</strong>,
// //         </p>

// //         <p>
// //           Your I TECH AI webinar is starting soon.
// //         </p>

// //         <a
// //           href="${WEBINAR_MEETING_LINK}"
// //           style="
// //             display:inline-block;
// //             padding:12px 20px;
// //             background:#111;
// //             color:white;
// //             text-decoration:none;
// //             border-radius:8px;
// //           "
// //         >
// //           🚀 Join Webinar
// //         </a>

// //       </div>
// //     `,
// //   });
// // }

// // /* =========================================================
// //    REMINDER SCHEDULER
// // ========================================================= */

// // setInterval(
// //   async () => {
// //     try {
// //       if (
// //         mongoose.connection.readyState !== 1
// //       ) {
// //         return;
// //       }

// //       const now = new Date();

// //       /*
// //         Reminder approximately 30 minutes before
// //         webinar.
// //       */

// //       for (const webinarDate of webinarDates) {
// //         const webinarTime =
// //           new Date(webinarDate);

// //         const difference =
// //           webinarTime.getTime() -
// //           now.getTime();

// //         const thirtyMinutes =
// //           30 * 60 * 1000;

// //         const fiveMinutes =
// //           5 * 60 * 1000;

// //         if (
// //           difference <= thirtyMinutes &&
// //           difference >= fiveMinutes
// //         ) {
// //           const leads = await Lead.find({
// //             zoomReminderSent: false,
// //             zoomEmailSent: true,
// //           });

// //           for (const lead of leads) {
// //             try {
// //               await sendReminderEmail(lead);

// //               lead.zoomReminderSent = true;

// //               await lead.save();

// //               console.log(
// //                 `🔔 Reminder sent to ${lead.email}`
// //               );
// //             } catch (error) {
// //               console.error(
// //                 `❌ Reminder failed for ${lead.email}:`,
// //                 error.message
// //               );
// //             }
// //           }
// //         }
// //       }
// //     } catch (error) {
// //       console.error(
// //         "❌ Reminder scheduler error:",
// //         error.message
// //       );
// //     }
// //   },
// //   60 * 1000
// // );

// // /* =========================================================
// //    404 API HANDLER
// // ========================================================= */

// // app.use("/api", (req, res) => {
// //   res.status(404).json({
// //     success: false,
// //     message: "API endpoint not found.",
// //   });
// // });

// // /* =========================================================
// //    GLOBAL ERROR HANDLER
// // ========================================================= */

// // app.use(
// //   (
// //     error,
// //     req,
// //     res,
// //     next
// //   ) => {
// //     console.error(
// //       "❌ GLOBAL ERROR:",
// //       error
// //     );

// //     res.status(500).json({
// //       success: false,
// //       message:
// //         "Internal server error.",
// //     });
// //   }
// // );

// // /* =========================================================
// //    START SERVER
// // ========================================================= */

// // app.listen(PORT, async () => {
// //   console.log("\n========================================");
// //   console.log(
// //     `🚀 Server running on port ${PORT}`
// //   );
// //   console.log(
// //     `🏠 Local: http://localhost:${PORT}`
// //   );
// //   console.log(
// //     `❤️ Health: http://localhost:${PORT}/health`
// //   );
// //   console.log("========================================");

// //   console.log(
// //     "🔗 Webinar:",
// //     WEBINAR_MEETING_LINK
// //   );

// //   console.log(
// //     "💬 WhatsApp:",
// //     WHATSAPP_COMMUNITY_LINK
// //   );

// //   console.log("========================================\n");

// //   await verifyEmailConfiguration();
// // });



// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
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
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// /*
//   Frontend files serve karne ke liye
// */
// app.use(express.static(__dirname));

// /* =========================================================
//    CONFIGURATION
// ========================================================= */

// const PORT = process.env.PORT || 5000;

// const MONGO_URI = process.env.MONGO_URI;
// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;

// /* =========================================================
//    WEBINAR CONFIG
// ========================================================= */

// const WEBINAR_MEETING_LINK =
//   "https://meet.google.com/uca-deoe-vnh?hs=151";

// const WHATSAPP_COMMUNITY_LINK =
//   "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";

// /* =========================================================
//    WEBINAR DATES
// ========================================================= */

// const webinarDates = [
//   "2026-09-08T20:00:00+05:30",
//   "2026-09-09T20:00:00+05:30",
//   "2026-09-10T20:00:00+05:30",
// ];

// /* =========================================================
//    STARTUP / ENV CHECK
// ========================================================= */

// console.log("\n========================================");
// console.log("       I TECH AI WEBINAR BACKEND");
// console.log("========================================");

// console.log(
//   "MONGO_URI:",
//   MONGO_URI ? "✅ Loaded" : "❌ Missing"
// );

// console.log(
//   "EMAIL_USER:",
//   EMAIL_USER ? "✅ Loaded" : "❌ Missing"
// );

// console.log(
//   "EMAIL_PASS:",
//   EMAIL_PASS ? "✅ Loaded" : "❌ Missing"
// );

// console.log("========================================\n");

// /* =========================================================
//    MONGODB CONNECTION
// ========================================================= */

// if (!MONGO_URI) {
//   console.error("❌ MONGO_URI is missing.");
// } else {
//   mongoose
//     .connect(MONGO_URI, {
//       serverSelectionTimeoutMS: 10000,
//       connectTimeoutMS: 10000,
//     })
//     .then(() => {
//       console.log("========================================");
//       console.log("✅ MONGODB CONNECTED");
//       console.log("📦 Database:", mongoose.connection.name);
//       console.log("🖥️ Host:", mongoose.connection.host);
//       console.log("========================================");
//     })
//     .catch((error) => {
//       console.error("❌ MongoDB connection error:");
//       console.error(error.message);
//     });
// }

// mongoose.connection.on("connected", () => {
//   console.log("🟢 MongoDB connection established");
// });

// mongoose.connection.on("error", (error) => {
//   console.error("🔴 MongoDB error:", error.message);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("🟡 MongoDB disconnected");
// });

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
//       lowercase: true,
//       trim: true,
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
//    NODEMAILER / GMAIL SMTP
// ========================================================= */

// let transporter = null;

// if (EMAIL_USER && EMAIL_PASS) {
//   transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",

//     /*
//       Gmail SMTP submission port
//     */
//     port: 587,

//     /*
//       Port 587 uses STARTTLS
//     */
//     secure: false,

//     /*
//       Force IPv4.
//       Render environment me IPv6 SMTP connection
//       issue ko avoid karne ke liye.
//     */
//     family: 4,

//     auth: {
//       user: EMAIL_USER,
//       pass: EMAIL_PASS,
//     },

//     connectionTimeout: 30000,
//     greetingTimeout: 30000,
//     socketTimeout: 30000,

//     tls: {
//       rejectUnauthorized: true,
//     },
//   });

//   console.log("📧 Gmail SMTP transporter created");
// } else {
//   console.error(
//     "❌ Gmail transporter NOT created because EMAIL_USER or EMAIL_PASS is missing."
//   );
// }

// /* =========================================================
//    EMAIL VERIFICATION
// ========================================================= */

// async function verifyEmailConfiguration() {
//   if (!EMAIL_USER || !EMAIL_PASS) {
//     console.error("❌ EMAIL_USER or EMAIL_PASS is missing.");
//     return false;
//   }

//   if (!transporter) {
//     console.error("❌ Email transporter is not configured.");
//     return false;
//   }

//   try {
//     console.log("📧 Verifying Gmail SMTP connection...");

//     await transporter.verify();

//     console.log("========================================");
//     console.log("✅ EMAIL SERVICE READY");
//     console.log("📧 Email:", EMAIL_USER);
//     console.log("📡 SMTP: smtp.gmail.com:587");
//     console.log("🌐 Network: IPv4");
//     console.log("========================================");

//     return true;
//   } catch (error) {
//     console.error("========================================");
//     console.error("❌ EMAIL SERVICE ERROR");
//     console.error("Code:", error.code || "N/A");
//     console.error("Command:", error.command || "N/A");
//     console.error("Response:", error.response || "N/A");
//     console.error("Response Code:", error.responseCode || "N/A");
//     console.error("Message:", error.message || "Unknown error");
//     console.error("========================================");

//     return false;
//   }
// }

// /* =========================================================
//    REGISTRATION EMAIL
// ========================================================= */

// async function sendRegistrationEmail(lead) {
//   if (!transporter) {
//     throw new Error(
//       "Email transporter is not configured."
//     );
//   }

//   const mailOptions = {
//     from: `"I TECH AI" <${EMAIL_USER}>`,

//     to: lead.email,

//     subject:
//       "🎉 Your I TECH AI Webinar Registration is Confirmed",

//     html: `
// <!DOCTYPE html>

// <html>

// <head>

// <meta charset="UTF-8">

// <meta name="viewport" content="width=device-width, initial-scale=1.0">

// <title>I TECH AI Registration</title>

// </head>

// <body style="
//   margin:0;
//   padding:0;
//   background:#f5f5f5;
//   font-family:Arial,Helvetica,sans-serif;
// ">

// <div style="
//   max-width:650px;
//   margin:30px auto;
//   background:#ffffff;
//   border-radius:14px;
//   overflow:hidden;
//   border:1px solid #e5e5e5;
// ">

//   <div style="
//     background:#111111;
//     color:#ffffff;
//     padding:25px;
//     text-align:center;
//   ">

//     <h1 style="
//       margin:0;
//       font-size:28px;
//     ">
//       I TECH AI
//     </h1>

//     <p style="
//       margin:8px 0 0;
//       color:#dddddd;
//     ">
//       Webinar Registration
//     </p>

//   </div>

//   <div style="
//     padding:30px;
//   ">

//     <h2 style="
//       margin-top:0;
//       color:#111111;
//     ">
//       🎉 Registration Successful!
//     </h2>

//     <p>
//       Hi <strong>${lead.name}</strong>,
//     </p>

//     <p>
//       Your registration for the
//       <strong>I TECH AI Webinar</strong>
//       has been successfully completed.
//     </p>

//     <div style="
//       background:#f7f7f7;
//       border-radius:10px;
//       padding:18px;
//       margin:22px 0;
//     ">

//       <p style="margin:7px 0;">
//         <strong>Name:</strong>
//         ${lead.name}
//       </p>

//       <p style="margin:7px 0;">
//         <strong>Email:</strong>
//         ${lead.email}
//       </p>

//       <p style="margin:7px 0;">
//         <strong>Phone:</strong>
//         ${lead.phone}
//       </p>

//       <p style="margin:7px 0;">
//         <strong>State:</strong>
//         ${lead.state}
//       </p>

//     </div>

//     <p>
//       Join the webinar using the button below:
//     </p>

//     <div style="
//       text-align:center;
//       margin:25px 0;
//     ">

//       <a
//         href="${WEBINAR_MEETING_LINK}"
//         style="
//           display:inline-block;
//           padding:14px 24px;
//           background:#111111;
//           color:#ffffff;
//           text-decoration:none;
//           border-radius:8px;
//           font-weight:bold;
//         "
//       >
//         🚀 Join Webinar
//       </a>

//     </div>

//     <div style="
//       text-align:center;
//       margin:20px 0;
//     ">

//       <a
//         href="${WHATSAPP_COMMUNITY_LINK}"
//         style="
//           display:inline-block;
//           padding:14px 24px;
//           background:#25D366;
//           color:#ffffff;
//           text-decoration:none;
//           border-radius:8px;
//           font-weight:bold;
//         "
//       >
//         💬 Join WhatsApp Channel
//       </a>

//     </div>

//     <p style="
//       margin-top:30px;
//     ">
//       Please save this email so you can easily access the webinar link.
//     </p>

//     <p>
//       See you in the webinar! 🚀
//     </p>

//     <p>
//       <strong>I TECH AI Team</strong>
//     </p>

//   </div>

// </div>

// </body>

// </html>
// `,
//   };

//   const info = await transporter.sendMail(
//     mailOptions
//   );

//   console.log("========================================");
//   console.log("📧 REGISTRATION EMAIL SENT");
//   console.log("👤 Name:", lead.name);
//   console.log("📧 Email:", lead.email);
//   console.log("🆔 Message ID:", info.messageId);
//   console.log("========================================");

//   return info;
// }

// /* =========================================================
//    HEALTH CHECK
// ========================================================= */

// app.get("/health", (req, res) => {
//   res.json({
//     success: true,

//     server: "I TECH AI Webinar Backend",

//     mongodb: {
//       connected:
//         mongoose.connection.readyState === 1,

//       database:
//         mongoose.connection.name || null,

//       host:
//         mongoose.connection.host || null,
//     },

//     email: {
//       configured:
//         Boolean(EMAIL_USER && EMAIL_PASS),

//       transporterCreated:
//         Boolean(transporter),
//     },

//     webinarDates,

//     webinarMeetingLink:
//       WEBINAR_MEETING_LINK,

//     whatsappCommunityLink:
//       WHATSAPP_COMMUNITY_LINK,
//   });
// });

// /* =========================================================
//    ROOT ROUTE
// ========================================================= */

// app.get("/", (req, res) => {
//   const filePath = path.join(
//     __dirname,
//     "index1.html"
//   );

//   res.sendFile(filePath, (error) => {
//     if (error) {
//       console.error(
//         "❌ Could not load index1.html:",
//         error.message
//       );

//       if (!res.headersSent) {
//         res.status(404).send(
//           "index1.html not found."
//         );
//       }
//     }
//   });
// });

// /* =========================================================
//    POST /api/leads
// ========================================================= */

// app.post("/api/leads", async (req, res) => {
//   try {
//     console.log("\n========================================");
//     console.log("📥 NEW LEAD REQUEST");
//     console.log("========================================");

//     const {
//       name,
//       phone,
//       email,
//       state,
//       communityJoined,
//     } = req.body;

//     /* -----------------------------------------
//        VALIDATION
//     ----------------------------------------- */

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

//     if (communityJoined !== true) {
//       return res.status(400).json({
//         success: false,

//         message:
//           "Please confirm that you joined the community.",
//       });
//     }

//     /* -----------------------------------------
//        MONGODB CHECK
//     ----------------------------------------- */

//     if (
//       mongoose.connection.readyState !== 1
//     ) {
//       console.error(
//         "❌ MongoDB is not connected."
//       );

//       return res.status(503).json({
//         success: false,

//         message:
//           "Database is currently unavailable. Please try again.",
//       });
//     }

//     /* -----------------------------------------
//        NORMALIZE PHONE
//     ----------------------------------------- */

//     const normalizedPhone = String(phone)
//       .replace(/\D/g, "")
//       .slice(-10);

//     if (
//       normalizedPhone.length !== 10
//     ) {
//       return res.status(400).json({
//         success: false,

//         message:
//           "Please enter a valid 10 digit phone number.",
//       });
//     }

//     /* -----------------------------------------
//        BASIC EMAIL VALIDATION
//     ----------------------------------------- */

//     const normalizedEmail = String(email)
//       .trim()
//       .toLowerCase();

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(normalizedEmail)) {
//       return res.status(400).json({
//         success: false,

//         message:
//           "Please enter a valid email address.",
//       });
//     }

//     /* -----------------------------------------
//        DUPLICATE CHECK
//     ----------------------------------------- */

//     const existingLead =
//       await Lead.findOne({
//         phone: normalizedPhone,
//       });

//     if (existingLead) {
//       console.log(
//         "⚠️ Duplicate lead:",
//         normalizedPhone
//       );

//       return res.status(409).json({
//         success: false,

//         message:
//           "This phone number is already registered.",
//       });
//     }

//     /* -----------------------------------------
//        CREATE LEAD
//     ----------------------------------------- */

//     const lead = new Lead({
//       name: String(name).trim(),

//       phone: normalizedPhone,

//       email: normalizedEmail,

//       state: String(state).trim(),

//       communityJoined: true,

//       communityJoinDate: new Date(),

//       registrationDate: new Date(),

//       zoomEmailSent: false,

//       zoomReminderSent: false,
//     });

//     /* -----------------------------------------
//        SAVE TO MONGODB
//     ----------------------------------------- */

//     console.log(
//       "💾 Saving lead to MongoDB..."
//     );

//     await lead.save();

//     console.log("========================================");
//     console.log("✅ LEAD SAVED");
//     console.log("👤 Name:", lead.name);
//     console.log("📱 Phone:", lead.phone);
//     console.log("📧 Email:", lead.email);
//     console.log(
//       "📦 Database:",
//       mongoose.connection.name
//     );
//     console.log("========================================");

//     /* -----------------------------------------
//        EMAIL BACKGROUND SEND
//     ----------------------------------------- */

//     sendRegistrationEmail(lead)
//       .then(async () => {
//         try {
//           await Lead.updateOne(
//             {
//               _id: lead._id,
//             },
//             {
//               $set: {
//                 zoomEmailSent: true,
//               },
//             }
//           );

//           console.log(
//             `✅ Email status updated for ${lead.email}`
//           );
//         } catch (error) {
//           console.error(
//             "❌ Could not update email status:",
//             error.message
//           );
//         }
//       })
//       .catch((error) => {
//         console.error(
//           "❌ REGISTRATION EMAIL FAILED"
//         );

//         console.error(
//           "Code:",
//           error.code || "N/A"
//         );

//         console.error(
//           "Command:",
//           error.command || "N/A"
//         );

//         console.error(
//           "Response:",
//           error.response || "N/A"
//         );

//         console.error(
//           "Message:",
//           error.message || "Unknown error"
//         );
//       });

//     /* -----------------------------------------
//        RESPONSE
//     ----------------------------------------- */

//     return res.status(201).json({
//       success: true,

//       message:
//         "Registration successful! Webinar and WhatsApp links are ready.",

//       webinarMeetingLink:
//         WEBINAR_MEETING_LINK,

//       whatsappCommunityLink:
//         WHATSAPP_COMMUNITY_LINK,

//       emailSent: false,
//     });
//   } catch (error) {
//     console.error(
//       "❌ LEAD REGISTRATION ERROR"
//     );

//     console.error(error);

//     /* -----------------------------------------
//        DUPLICATE KEY ERROR
//     ----------------------------------------- */

//     if (error.code === 11000) {
//       return res.status(409).json({
//         success: false,

//         message:
//           "This phone number is already registered.",
//       });
//     }

//     return res.status(500).json({
//       success: false,

//       message:
//         "Registration failed. Please try again.",
//     });
//   }
// });

// /* =========================================================
//    GET ALL LEADS
// ========================================================= */

// app.get("/api/leads", async (req, res) => {
//   try {
//     if (
//       mongoose.connection.readyState !== 1
//     ) {
//       return res.status(503).json({
//         success: false,

//         message:
//           "Database is not connected.",
//       });
//     }

//     const leads = await Lead.find()
//       .sort({
//         createdAt: -1,
//       })
//       .lean();

//     return res.json({
//       success: true,

//       database:
//         mongoose.connection.name,

//       count: leads.length,

//       leads,
//     });
//   } catch (error) {
//     console.error(
//       "❌ GET LEADS ERROR:",
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
//    GET LEAD BY PHONE
// ========================================================= */

// app.get(
//   "/api/leads/:phone",
//   async (req, res) => {
//     try {
//       if (
//         mongoose.connection.readyState !== 1
//       ) {
//         return res.status(503).json({
//           success: false,

//           message:
//             "Database is not connected.",
//         });
//       }

//       const normalizedPhone =
//         String(req.params.phone)
//           .replace(/\D/g, "")
//           .slice(-10);

//       if (
//         normalizedPhone.length !== 10
//       ) {
//         return res.status(400).json({
//           success: false,

//           message:
//             "Invalid phone number.",
//         });
//       }

//       const lead =
//         await Lead.findOne({
//           phone: normalizedPhone,
//         }).lean();

//       if (!lead) {
//         return res.status(404).json({
//           success: false,

//           message:
//             "Lead not found.",
//         });
//       }

//       return res.json({
//         success: true,

//         lead,
//       });
//     } catch (error) {
//       console.error(
//         "❌ GET LEAD ERROR:",
//         error.message
//       );

//       return res.status(500).json({
//         success: false,

//         message:
//           "Unable to fetch lead.",
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
//       const { email } = req.body;

//       if (!email) {
//         return res.status(400).json({
//           success: false,

//           message:
//             "Test email address is required.",
//         });
//       }

//       if (!transporter) {
//         return res.status(500).json({
//           success: false,

//           message:
//             "Email transporter is not configured.",
//         });
//       }

//       const testEmail =
//         String(email)
//           .trim()
//           .toLowerCase();

//       console.log(
//         "========================================"
//       );

//       console.log(
//         `📧 Sending test email to ${testEmail}`
//       );

//       console.log(
//         "========================================"
//       );

//       const info =
//         await transporter.sendMail({
//           from:
//             `"I TECH AI" <${EMAIL_USER}>`,

//           to: testEmail,

//           subject:
//             "I TECH AI Test Email",

//           html: `
//             <div style="
//               font-family:Arial,sans-serif;
//               max-width:600px;
//               margin:auto;
//               padding:30px;
//             ">

//               <h2>
//                 ✅ Email Working
//               </h2>

//               <p>
//                 This is a test email from
//                 I TECH AI Webinar Backend.
//               </p>

//               <p>
//                 Gmail SMTP connection is working correctly.
//               </p>

//             </div>
//           `,
//         });

//       console.log(
//         "✅ TEST EMAIL SENT"
//       );

//       console.log(
//         "🆔 Message ID:",
//         info.messageId
//       );

//       return res.json({
//         success: true,

//         message:
//           "Test email sent successfully.",

//         messageId:
//           info.messageId,
//       });
//     } catch (error) {
//       console.error(
//         "========================================"
//       );

//       console.error(
//         "❌ TEST EMAIL ERROR"
//       );

//       console.error(
//         "Code:",
//         error.code || "N/A"
//       );

//       console.error(
//         "Command:",
//         error.command || "N/A"
//       );

//       console.error(
//         "Response:",
//         error.response || "N/A"
//       );

//       console.error(
//         "Response Code:",
//         error.responseCode || "N/A"
//       );

//       console.error(
//         "Message:",
//         error.message || "Unknown error"
//       );

//       console.error(
//         "========================================"
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
//    REMINDER EMAIL
// ========================================================= */

// async function sendReminderEmail(lead) {
//   if (!transporter) {
//     throw new Error(
//       "Email transporter is not configured."
//     );
//   }

//   await transporter.sendMail({
//     from:
//       `"I TECH AI" <${EMAIL_USER}>`,

//     to: lead.email,

//     subject:
//       "⏰ I TECH AI Webinar Reminder",

//     html: `
//       <div style="
//         font-family:Arial,sans-serif;
//         max-width:650px;
//         margin:auto;
//         padding:25px;
//       ">

//         <h2>
//           ⏰ Webinar Reminder
//         </h2>

//         <p>
//           Hi <strong>${lead.name}</strong>,
//         </p>

//         <p>
//           Your I TECH AI webinar is starting soon.
//         </p>

//         <p>
//           Join the webinar using the button below.
//         </p>

//         <a
//           href="${WEBINAR_MEETING_LINK}"
//           style="
//             display:inline-block;
//             padding:12px 20px;
//             background:#111111;
//             color:#ffffff;
//             text-decoration:none;
//             border-radius:8px;
//             font-weight:bold;
//           "
//         >
//           🚀 Join Webinar
//         </a>

//         <p style="
//           margin-top:25px;
//         ">
//           <strong>
//             I TECH AI Team
//           </strong>
//         </p>

//       </div>
//     `,
//   });
// }

// /* =========================================================
//    REMINDER SCHEDULER
// ========================================================= */

// setInterval(
//   async () => {
//     try {
//       if (
//         mongoose.connection.readyState !== 1
//       ) {
//         return;
//       }

//       if (!transporter) {
//         return;
//       }

//       const now = new Date();

//       const thirtyMinutes =
//         30 * 60 * 1000;

//       const fiveMinutes =
//         5 * 60 * 1000;

//       for (
//         const webinarDate of webinarDates
//       ) {
//         const webinarTime =
//           new Date(webinarDate);

//         const difference =
//           webinarTime.getTime() -
//           now.getTime();

//         /*
//           30 min ke andar aur 5 min se pehle
//         */

//         if (
//           difference <= thirtyMinutes &&
//           difference >= fiveMinutes
//         ) {
//           const leads =
//             await Lead.find({
//               zoomReminderSent: false,

//               zoomEmailSent: true,
//             });

//           console.log(
//             `⏰ Reminder window active for ${webinarDate}`
//           );

//           console.log(
//             `👥 Leads to remind: ${leads.length}`
//           );

//           for (
//             const lead of leads
//           ) {
//             try {
//               await sendReminderEmail(
//                 lead
//               );

//               lead.zoomReminderSent =
//                 true;

//               await lead.save();

//               console.log(
//                 `🔔 Reminder sent to ${lead.email}`
//               );
//             } catch (error) {
//               console.error(
//                 `❌ Reminder failed for ${lead.email}:`,
//                 error.message
//               );
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error(
//         "❌ Reminder scheduler error:",
//         error.message
//       );
//     }
//   },
//   60 * 1000
// );

// /* =========================================================
//    API 404 HANDLER
// ========================================================= */

// app.use(
//   "/api",
//   (req, res) => {
//     res.status(404).json({
//       success: false,

//       message:
//         "API endpoint not found.",
//     });
//   }
// );

// /* =========================================================
//    GLOBAL ERROR HANDLER
// ========================================================= */

// app.use(
//   (
//     error,
//     req,
//     res,
//     next
//   ) => {
//     console.error(
//       "❌ GLOBAL ERROR:",
//       error
//     );

//     if (res.headersSent) {
//       return next(error);
//     }

//     res.status(500).json({
//       success: false,

//       message:
//         "Internal server error.",
//     });
//   }
// );

// /* =========================================================
//    START SERVER
// ========================================================= */

// app.listen(
//   PORT,
//   async () => {
//     console.log(
//       "\n========================================"
//     );

//     console.log(
//       `🚀 Server running on port ${PORT}`
//     );

//     console.log(
//       `🏠 Local: http://localhost:${PORT}`
//     );

//     console.log(
//       `❤️ Health: http://localhost:${PORT}/health`
//     );

//     console.log(
//       "========================================"
//     );

//     console.log(
//       "🔗 Webinar:",
//       WEBINAR_MEETING_LINK
//     );

//     console.log(
//       "💬 WhatsApp:",
//       WHATSAPP_COMMUNITY_LINK
//     );

//     console.log(
//       "========================================\n"
//     );

//     /*
//       Server start hone ke baad Gmail verify
//     */

//     await verifyEmailConfiguration();
//   }
// );



const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dns = require("dns");

require("dotenv").config();

/* =========================================================
   DNS CONFIGURATION
========================================================= */

try {
  dns.setDefaultResultOrder("ipv4first");
  console.log("🌐 DNS order: IPv4 first");
} catch (error) {
  console.log("⚠️ Could not set DNS order:", error.message);
}

/* =========================================================
   APP
========================================================= */

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

/* =========================================================
   STATIC FILES
========================================================= */

app.use(express.static(__dirname));

/* =========================================================
   CONFIGURATION
========================================================= */

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

/* =========================================================
   WEBINAR CONFIGURATION
========================================================= */

// const WEBINAR_MEETING_LINK =
//   "https://meet.google.com/uca-deoe-vnh?hs=151";
const WEBINAR_MEETING_LINK = process.env.GOOGLE_MEET_LINK;

const WHATSAPP_COMMUNITY_LINK =
  "https://whatsapp.com/channel/0029VbDbyYdChq6ORFUB1q2E";

const webinarDates = [
  "2026-09-08T20:00:00+05:30",
  "2026-09-09T20:00:00+05:30",
  "2026-09-10T20:00:00+05:30",
];

/* =========================================================
   DATABASE
========================================================= */

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing");
} else {
  console.log("🔗 MongoDB URI detected");
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("========================================");
    console.log("🟢 MongoDB connection established");
    console.log("📦 Database:", mongoose.connection.name);
    console.log("🖥️ Host:", mongoose.connection.host);
    console.log("========================================");
  })
  .catch((error) => {
    console.error("========================================");
    console.error("❌ MongoDB CONNECTION ERROR");
    console.error("Message:", error.message);
    console.error("========================================");
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
   GMAIL SMTP
========================================================= */

let transporter = null;

/*
  Gmail SMTP ko directly IPv4 address par connect karne ki
  koshish ki ja rahi hai.

  Example:
  smtp.gmail.com
       ↓
  IPv4 address
       ↓
  Gmail SMTP :587
*/

async function createGmailTransporter() {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("========================================");
    console.error("❌ EMAIL CONFIGURATION MISSING");
    console.error("EMAIL_USER:", EMAIL_USER ? "SET" : "MISSING");
    console.error("EMAIL_PASS:", EMAIL_PASS ? "SET" : "MISSING");
    console.error("========================================");

    return null;
  }

  try {
    console.log("========================================");
    console.log("🌐 Resolving Gmail IPv4...");
    console.log("Host: smtp.gmail.com");
    console.log("========================================");

    const addresses = await new Promise((resolve, reject) => {
      dns.resolve4("smtp.gmail.com", (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      });
    });

    console.log("========================================");
    console.log("🌐 GMAIL IPV4 DNS CHECK");
    console.log("========================================");
    console.log("SMTP Host: smtp.gmail.com");
    console.log("IPv4 Addresses:", addresses);
    console.log("========================================");

    if (!addresses || addresses.length === 0) {
      console.error("❌ No Gmail IPv4 address found");
      return null;
    }

    const smtpIP = addresses[0];

    console.log("🎯 Using Gmail IPv4:", smtpIP);

    const smtpTransporter = nodemailer.createTransport({
      host: smtpIP,
      port: 587,
      secure: false,
      family: 4,

      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },

      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,

      tls: {
        servername: "smtp.gmail.com",
        rejectUnauthorized: true,
      },
    });

    console.log("========================================");
    console.log("📧 Gmail transporter created");
    console.log("Host:", smtpIP);
    console.log("Port: 587");
    console.log("Network: IPv4");
    console.log("TLS Servername: smtp.gmail.com");
    console.log("========================================");

    return smtpTransporter;
  } catch (error) {
    console.error("========================================");
    console.error("❌ Gmail IPv4 DNS ERROR");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    console.error("========================================");

    return null;
  }
}

/* =========================================================
   EMAIL VERIFICATION
========================================================= */

async function verifyEmailConfiguration() {
  console.log("========================================");
  console.log("📧 Verifying Gmail SMTP connection...");
  console.log("========================================");

  transporter = await createGmailTransporter();

  if (!transporter) {
    console.error("❌ Gmail transporter could not be created");
    return;
  }

  try {
    await transporter.verify();

    console.log("========================================");
    console.log("✅ Gmail SMTP connection successful");
    console.log("📧 Email:", EMAIL_USER);
    console.log("========================================");
  } catch (error) {
    console.error("========================================");
    console.error("❌ EMAIL SERVICE ERROR");
    console.error("Code:", error.code);
    console.error("Command:", error.command || "N/A");
    console.error("Response:", error.response || "N/A");
    console.error("Response Code:", error.responseCode || "N/A");
    console.error("Message:", error.message);
    console.error("========================================");
  }
}

/* =========================================================
   EMAIL HTML - REGISTRATION
========================================================= */

function registrationEmailHTML(name) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #f4f7fb;
      font-family: Arial, Helvetica, sans-serif;
    }

    .container {
      max-width: 650px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    }

    .header {
      background: #111827;
      color: #ffffff;
      padding: 35px 25px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 30px;
    }

    .header p {
      margin-top: 10px;
      color: #d1d5db;
    }

    .content {
      padding: 30px;
      color: #1f2937;
    }

    .success {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      color: #065f46;
      padding: 18px;
      border-radius: 10px;
      margin-bottom: 25px;
    }

    .meeting {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 20px;
      border-radius: 12px;
      margin-top: 20px;
    }

    .button {
      display: inline-block;
      background: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      padding: 14px 24px;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 15px;
    }

    .whatsapp {
      background: #16a34a;
    }

    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      color: #6b7280;
      font-size: 13px;
    }
  </style>
</head>

<body>

  <div class="container">

    <div class="header">
      <h1>🚀 I TECH AI</h1>
      <p>Webinar Registration Confirmed</p>
    </div>

    <div class="content">

      <div class="success">
        <strong>Registration Successful!</strong>
        <br>
        Your webinar registration has been successfully received.
      </div>

      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thank you for registering for the I TECH AI webinar.
        We are excited to have you with us.
      </p>

      <div class="meeting">

        <h2>🎥 Join Webinar</h2>

        <p>
          Click the button below to join the webinar:
        </p>

        <a
          href="${WEBINAR_MEETING_LINK}"
          class="button"
          target="_blank"
        >
          Join Google Meet
        </a>

      </div>

      <div class="meeting">

        <h2>📱 WhatsApp Channel</h2>

        <p>
          Join our WhatsApp channel for updates and reminders.
        </p>

        <a
          href="${WHATSAPP_COMMUNITY_LINK}"
          class="button whatsapp"
          target="_blank"
        >
          Join WhatsApp Channel
        </a>

      </div>

      <p style="margin-top:30px;">
        Please save the webinar link and join on time.
      </p>

      <p>
        Regards,<br>
        <strong>I TECH AI Team</strong>
      </p>

    </div>

    <div class="footer">
      © 2026 I TECH AI. All rights reserved.
    </div>

  </div>

</body>
</html>
`;
}

/* =========================================================
   EMAIL HTML - REMINDER
========================================================= */

function reminderEmailHTML(name) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #f4f7fb;
      font-family: Arial, Helvetica, sans-serif;
    }

    .container {
      max-width: 650px;
      margin: 30px auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
    }

    .header {
      background: #111827;
      color: white;
      padding: 30px;
      text-align: center;
    }

    .content {
      padding: 30px;
      color: #1f2937;
    }

    .button {
      display: inline-block;
      background: #2563eb;
      color: white !important;
      text-decoration: none;
      padding: 14px 24px;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 15px;
    }
  </style>

</head>

<body>

  <div class="container">

    <div class="header">
      <h1>⏰ Webinar Reminder</h1>
    </div>

    <div class="content">

      <p>Hi <strong>${name}</strong>,</p>

      <p>
        This is a reminder for your registered I TECH AI webinar.
      </p>

      <p>
        Please join the webinar using the link below.
      </p>

      <a
        href="${WEBINAR_MEETING_LINK}"
        class="button"
        target="_blank"
      >
        Join Google Meet
      </a>

      <p style="margin-top:30px;">
        See you there!
      </p>

      <p>
        Regards,<br>
        <strong>I TECH AI Team</strong>
      </p>

    </div>

  </div>

</body>
</html>
`;
}

/* =========================================================
   SEND REGISTRATION EMAIL
========================================================= */

async function sendRegistrationEmail(lead) {
  try {
    if (!transporter) {
      console.error("❌ Email transporter is not available");
      return false;
    }

    const mailOptions = {
      from: `"I TECH AI" <${EMAIL_USER}>`,
      to: lead.email,
      subject: "🎉 Your I TECH AI Webinar Registration is Confirmed",
      html: registrationEmailHTML(lead.name),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("========================================");
    console.log("✅ REGISTRATION EMAIL SENT");
    console.log("To:", lead.email);
    console.log("Message ID:", info.messageId);
    console.log("========================================");

    return true;
  } catch (error) {
    console.error("========================================");
    console.error("❌ REGISTRATION EMAIL ERROR");
    console.error("Code:", error.code);
    console.error("Command:", error.command || "N/A");
    console.error("Message:", error.message);
    console.error("========================================");

    return false;
  }
}

/* =========================================================
   SEND REMINDER EMAIL
========================================================= */

async function sendReminderEmail(lead) {
  try {
    if (!transporter) {
      console.error("❌ Email transporter is not available");
      return false;
    }

    const mailOptions = {
      from: `"I TECH AI" <${EMAIL_USER}>`,
      to: lead.email,
      subject: "⏰ I TECH AI Webinar Reminder",
      html: reminderEmailHTML(lead.name),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("========================================");
    console.log("✅ REMINDER EMAIL SENT");
    console.log("To:", lead.email);
    console.log("Message ID:", info.messageId);
    console.log("========================================");

    return true;
  } catch (error) {
    console.error("========================================");
    console.error("❌ REMINDER EMAIL ERROR");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    console.error("========================================");

    return false;
  }
}

/* =========================================================
   HOME ROUTE
========================================================= */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index1.html"));
});

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "I TECH AI Webinar API is running",
    serverTime: new Date().toISOString(),

    mongodb: {
      connected: mongoose.connection.readyState === 1,
      database: mongoose.connection.name || null,
      host: mongoose.connection.host || null,
    },

    email: {
      configured: Boolean(EMAIL_USER && EMAIL_PASS),
      transporterReady: Boolean(transporter),
      provider: "Gmail SMTP",
      smtpHost: "smtp.gmail.com",
      smtpPort: 587,
      network: "IPv4",
    },

    webinar: {
      meetingLink: WEBINAR_MEETING_LINK,
      whatsappChannel: WHATSAPP_COMMUNITY_LINK,
      dates: webinarDates,
    },
  });
});

/* =========================================================
   REGISTER LEAD
========================================================= */

app.post("/api/leads", async (req, res) => {
  try {
    console.log("========================================");
    console.log("📥 NEW LEAD REQUEST");
    console.log("========================================");

    const {
      name,
      phone,
      email,
      state,
      communityJoined,
    } = req.body;

    /* -------------------------------------------------------
       BASIC VALIDATION
    ------------------------------------------------------- */

    if (!name || !phone || !email || !state) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, email and state are required.",
      });
    }

    /* -------------------------------------------------------
       COMMUNITY VALIDATION
    ------------------------------------------------------- */

    if (
      communityJoined !== true &&
      communityJoined !== "true" &&
      communityJoined !== 1 &&
      communityJoined !== "1"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please join the WhatsApp channel before registering.",
      });
    }

    /* -------------------------------------------------------
       MONGODB CHECK
    ------------------------------------------------------- */

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database is currently unavailable. Please try again.",
      });
    }

    /* -------------------------------------------------------
       PHONE NORMALIZATION
    ------------------------------------------------------- */

    let normalizedPhone = String(phone).replace(/\D/g, "");

    if (normalizedPhone.startsWith("91") && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.substring(2);
    }

    if (normalizedPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number.",
      });
    }

    /* -------------------------------------------------------
       EMAIL VALIDATION
    ------------------------------------------------------- */

    const normalizedEmail = String(email)
      .trim()
      .toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    /* -------------------------------------------------------
       DUPLICATE PHONE CHECK
    ------------------------------------------------------- */

    const existingLead = await Lead.findOne({
      phone: normalizedPhone,
    });

    if (existingLead) {
      return res.status(409).json({
        success: false,
        message: "This phone number is already registered.",
      });
    }

    /* -------------------------------------------------------
       SAVE LEAD
    ------------------------------------------------------- */

    const lead = await Lead.create({
      name: String(name).trim(),
      phone: normalizedPhone,
      email: normalizedEmail,
      state: String(state).trim(),

      communityJoined: true,
      communityJoinDate: new Date(),

      zoomEmailSent: false,
      zoomReminderSent: false,

      registrationDate: new Date(),
    });

    console.log("========================================");
    console.log("✅ LEAD SAVED");
    console.log("ID:", lead._id);
    console.log("Name:", lead.name);
    console.log("Phone:", lead.phone);
    console.log("Email:", lead.email);
    console.log("State:", lead.state);
    console.log("📦 Database:", mongoose.connection.name);
    console.log("========================================");

    /* -------------------------------------------------------
       SEND EMAIL IN BACKGROUND
    ------------------------------------------------------- */

    sendRegistrationEmail(lead)
      .then(async (sent) => {
        if (sent) {
          await Lead.findByIdAndUpdate(lead._id, {
            zoomEmailSent: true,
          });

          console.log(
            "✅ zoomEmailSent updated to true"
          );
        }
      })
      .catch((error) => {
        console.error(
          "❌ Background email error:",
          error.message
        );
      });

    /* -------------------------------------------------------
       RESPONSE
    ------------------------------------------------------- */

    // return res.status(201).json({
    //   success: true,
    //   message:
    //     "Registration successful. Webinar details have been processed.",

    //   leadId: lead._id,

    //   webinarMeetingLink: WEBINAR_MEETING_LINK,

    //   whatsappCommunityLink:
    //     WHATSAPP_COMMUNITY_LINK,
    // });

return res.status(201).json({
  success: true,
  message:
    "Registration successful. Webinar details have been processed.",

  leadId: lead._id,

  // Frontend success button isi property ko use karega
  zoomLink: WEBINAR_MEETING_LINK,

  // Existing property bhi rakhi gayi hai
  webinarMeetingLink: WEBINAR_MEETING_LINK,

  whatsappCommunityLink:
    WHATSAPP_COMMUNITY_LINK,
});


  } catch (error) {
    console.error("========================================");
    console.error("❌ LEAD REGISTRATION ERROR");
    console.error("Name:", error.name);
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    console.error("========================================");

    /* -------------------------------------------------------
       DUPLICATE KEY ERROR
    ------------------------------------------------------- */

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This phone number is already registered.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
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
        message: "Database is unavailable.",
      });
    }

    const leads = await Lead.find()
      .sort({
        registrationDate: -1,
      })
      .lean();

    return res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error(
      "❌ GET LEADS ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch leads.",
    });
  }
});

/* =========================================================
   GET LEAD BY PHONE
========================================================= */

app.get("/api/leads/:phone", async (req, res) => {
  try {
    let phone = String(req.params.phone).replace(
      /\D/g,
      ""
    );

    if (phone.startsWith("91") && phone.length === 12) {
      phone = phone.substring(2);
    }

    const lead = await Lead.findOne({
      phone,
    }).lean();

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found.",
      });
    }

    return res.json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error(
      "❌ GET LEAD ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch lead.",
    });
  }
});

/* =========================================================
   TEST EMAIL API
========================================================= */

app.post("/api/test-email", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    if (!transporter) {
      return res.status(503).json({
        success: false,
        message: "Gmail SMTP transporter is not ready.",
      });
    }

    const info = await transporter.sendMail({
      from: `"I TECH AI" <${EMAIL_USER}>`,
      to: email,
      subject: "I TECH AI - Test Email",
      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;">
          <h1>✅ Email Test Successful</h1>

          <p>
            This is a test email from the I TECH AI webinar server.
          </p>

          <p>
            Gmail SMTP connection is working.
          </p>
        </div>
      `,
    });

    console.log("========================================");
    console.log("✅ TEST EMAIL SENT");
    console.log("To:", email);
    console.log("Message ID:", info.messageId);
    console.log("========================================");

    return res.json({
      success: true,
      message: "Test email sent successfully.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("========================================");
    console.error("❌ TEST EMAIL ERROR");
    console.error("Code:", error.code);
    console.error("Command:", error.command || "N/A");
    console.error("Message:", error.message);
    console.error("========================================");

    return res.status(500).json({
      success: false,
      message: error.message,
      code: error.code || null,
    });
  }
});

/* =========================================================
   MANUAL REMINDER API
========================================================= */

app.post("/api/send-reminders", async (req, res) => {
  try {
    const leads = await Lead.find({
      zoomReminderSent: false,
    });

    console.log(
      `📨 Reminder candidates: ${leads.length}`
    );

    let sentCount = 0;

    for (const lead of leads) {
      const sent = await sendReminderEmail(lead);

      if (sent) {
        await Lead.findByIdAndUpdate(lead._id, {
          zoomReminderSent: true,
        });

        sentCount++;
      }
    }

    return res.json({
      success: true,
      message: "Reminder process completed.",
      totalCandidates: leads.length,
      sentCount,
    });
  } catch (error) {
    console.error(
      "❌ REMINDER API ERROR:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to send reminders.",
    });
  }
});

/* =========================================================
   API 404
========================================================= */

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
    path: req.originalUrl,
  });
});

/* =========================================================
   GLOBAL ERROR HANDLER
========================================================= */

app.use((error, req, res, next) => {
  console.error("========================================");
  console.error("❌ GLOBAL SERVER ERROR");
  console.error("Message:", error.message);
  console.error("========================================");

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, () => {
  console.log("");
  console.log("========================================");
  console.log("🚀 I TECH AI WEBINAR SERVER");
  console.log("========================================");
  console.log("🟢 Server running on port:", PORT);
  console.log("🌐 Environment:", process.env.NODE_ENV || "production");
  console.log("📧 Email:", EMAIL_USER ? "Configured" : "Missing");
  console.log("📦 MongoDB:", MONGO_URI ? "Configured" : "Missing");
  // console.log("🎥 Google Meet:", WEBINAR_MEETING_LINK);
  const WEBINAR_MEETING_LINK = process.env.GOOGLE_MEET_LINK;
  
  console.log("📱 WhatsApp:", WHATSAPP_COMMUNITY_LINK);
  console.log("========================================");
});

/* =========================================================
   START GMAIL CHECK
========================================================= */

verifyEmailConfiguration();

/* =========================================================
   PERIODIC EMAIL REMINDER CHECK
========================================================= */

/*
  Har 60 seconds check hoga.

  NOTE:
  Ye reminder automatically tabhi bhejega jab
  application running ho aur transporter ready ho.
*/

setInterval(async () => {
  try {
    if (!transporter) {
      return;
    }

    const now = new Date();

    const webinarStartedOrNear = webinarDates.some(
      (date) => {
        const webinarTime = new Date(date);

        const difference =
          webinarTime.getTime() - now.getTime();

        /*
          Reminder window:
          webinar se 30 minutes pehle
        */

        return (
          difference > 0 &&
          difference <= 30 * 60 * 1000
        );
      }
    );

    if (!webinarStartedOrNear) {
      return;
    }

    const leads = await Lead.find({
      zoomReminderSent: false,
      zoomEmailSent: true,
    });

    if (leads.length === 0) {
      return;
    }

    console.log(
      `⏰ Sending reminders to ${leads.length} leads...`
    );

    for (const lead of leads) {
      const sent = await sendReminderEmail(lead);

      if (sent) {
        await Lead.findByIdAndUpdate(lead._id, {
          zoomReminderSent: true,
        });
      }
    }
  } catch (error) {
    console.error(
      "❌ Reminder scheduler error:",
      error.message
    );
  }
}, 60 * 1000);

