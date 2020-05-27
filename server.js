require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'muahua51@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'Ihaveagirlname8.' // TODO: your gmail password
    }
});

let output = `<div style="max-width:550px; min-width:320px;  background-color: white; border: 1px solid #DDDDDD; margin-right: auto; margin-left: auto;">
<div style="margin-left:30px;margin-right:30px">
    <p>&nbsp;</p>
    <p><a href="https://logico.com.ar" style="text-decoration:none;font-family:Verdana, Geneva, sans-serif;font-weight: bold; color: #3D3D3D;font-size: 15px">@Austin Fusion FC</a></p>
    <hr style="margin-top:10px;margin-bottom:65px;border:none;border-bottom:1px solid red"
    />
    <h1 style="font-family: Tahoma, Geneva, sans-serif; font-weight: normal; color: #2A2A2A; text-align: center; margin-bottom: 65px;font-size: 20px; letter-spacing: 6px;font-weight: normal; border: 2px solid black; padding: 15px;">Soccer Practice Reminder!</h1>
    <h3 style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-style:italic;font-weight:500">Your appearance is <span style="border-bottom: 1px solid red">very important</span> to us:</h3>
    <p style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">Just a friendly reminder, we have our Saturday game tomorrow.
        Bring your water, soccer ball, and based upon the temperatures – make sure you
        are dressed appropriately.</p>

    <p style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">
        Location : 1600 Gattis School Rd, Round Rock, TX 78664
    </p>

    <table style="width:100%;">
        <th>
            <td style="width:25%"></td>
            <td style="background-color:black;with:50%;text-align:center;padding:15px"><a href="https://logico.com.ar/" style="margin-left: auto; margin-right: auto;text-decoration:none;color: white;text-align:center;font-family:Courier New, Courier, monospace;font-weight:600;letter-spacing:2px;background-color:black;padding:15px">CONFIRM</a></td>
            <td
                style="width:25%"></td>
        </th>
    </table>
    <hr style="margin-top:10px;margin-top:75px" />
    <p style="text-align:center;margin-bottom:15px"><small style="text-align:center;font-family:Courier New, Courier, monospace;font-size:10px;color#666;">@Copy Right <a href="https://logico.com.ar/" style="color:#666"> Kevin Nguyen</a> | Your Captain <span style="color:red">&hearts;</span> </small></p>
    <p>&nbsp;</p>
</div>
</div>`; 
// Step 2
let mailOptions = {
    from: 'muahua51@gmail.com', // TODO: email sender
    to: 'an.nguyen1197@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    html: output
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});