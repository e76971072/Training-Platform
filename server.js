// require('dotenv').config();
// const nodemailer = require('nodemailer'); // require for sending email to clients 
// var moment = require('moment'); // require for time in local 
// const log = console.log;
// // express help to send and receive req from client server 
// var express = require('express');
// var cors = require('cors');
// var app = express();
// const bodyParser = require("body-parser");
// const router = express.Router();



// // app.set('port', process.env.PORT || 5000);  // setting port 5000 default for server 

// // Step 1
// // let transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //         user: process.env.EMAIL || 'muahua51@gmail.com', // TODO: your gmail account
// //         pass: process.env.PASSWORD || 'Ihaveagirlname8.' // TODO: your gmail password
// //     }
// // });

// let welcome  = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
//   <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="format-detection" content="date=no" />
//   <meta name="format-detection" content="address=no" />
//   <meta name="format-detection" content="telephone=no" />
//   <style type="text/css">
//     @font-face {font-family: 'Tictail Sans Regular';    src: url('https://app.ttcdn.co/fonts/TictailSans-Regular.woff') format('woff');    font-weight: normal;    font-style: normal;}
//       @font-face {font-family: 'Tictail Sans Bold';    src: url('https://app.ttcdn.co/fonts/TictailSans-Bold.woff') format('woff');    font-weight: normal;    font-style: normal;}
//       @font-face {font-family: 'Tictail Sans Semi-Bold';    src: url('https://app.ttcdn.co/fonts/TictailSans-SemiBold.woff') format('woff');    font-weight: normal;    font-style: normal;}
//         body{
//           padding:0 !important;
//           margin:0 !important;
//           display:block !important;
//           background:#ffffff;
//           -webkit-text-size-adjust:none;
//         }
//         a{
//           color:#a4a4a4;
//           text-decoration:none;
//         }
//         p{
//           padding:0 !important;
//           margin:0 !important;
//         }
//       @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-5]{
//           height:5px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-10]{
//           height:10px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-15]{
//           height:15px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-20]{
//           height:20px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-25]{
//           height:25px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=mobile-br-30]{
//           height:30px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         th[class=m-td],td[class=m-td],div[class=hide-for-mobile],span[class=hide-for-mobile]{
//           display:none !important;
//           width:0 !important;
//           height:0 !important;
//           font-size:0 !important;
//           line-height:0 !important;
//           min-height:0 !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         span[class=mobile-block]{
//           display:block !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=wgmail] img{
//           min-width:320px !important;
//           width:320px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=text],div[class=text-m-center]{
//           line-height:25px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=text-m-center]{
//           text-align:center !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=text-header]{
//           font-size:12px !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=img-m-center]{
//           text-align:center !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=fluid-img] img,td[class=fluid-img] img{
//           width:100% !important;
//           max-width:480px !important;
//           height:auto !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         table[class=mobile-shell]{
//           width:100% !important;
//           min-width:100% !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=td]{
//           width:100% !important;
//           min-width:100% !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         table[class=center]{
//           margin:0 auto;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=column],th[class=column]{
//           float:left !important;
//           width:100% !important;
//           display:block !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=thumb]{
//           width:auto !important;
//           height:auto !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=thumb] img{
//           width:100% !important;
//           min-width:93px !important;
//           height:auto !important;
//         }
    
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=content-spacing]{
//           width:14px !important;
//         }
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         td[class=value-prop]{
//           width:100% !important;
//           display: block;
//         }
//     } @media only screen and (max-device-width: 480px), only screen and (max-width: 480px){
//         div[class=consumer-headline]{
//           font-size: 20px !important;
//           line-height: 22px !important;
//         }
//     }
//   </style>
// </head>

// <body style="padding: 0; margin: 0; display: block; background: #fff; -webkit-text-size-adjust: none; padding:0 !important; margin:0 !important; display:block !important; background:#F4F4F4; -webkit-text-size-adjust:none">
//   <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F4F4F4">
//     <tr>
//       <td align="center" valign="top">
//         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//           <tr>
//             <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//           </tr>
//         </table>
//         <table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell" bgcolor="#FFFFFF">
//           <tr>
//             <td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
//               <!-- Header -->
//               <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #000000; border-radius: 3px 3px 0 0;">
//                 <tr>
//                   <td>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="14" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <table class="navbar" width="100%" border="0" cellspacing="0" cellpadding="0" style="">
//                       <tr>
//                         <td class="content-spacing" width="1" style="font-size: 0; line-height: 0; text-align: left"></td>
//                         <td>
//                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                             <tr>
//                               <td>
//                                 <table border="0" cellspacing="0" cellpadding="0">
//                                   <tr>
//                                     <td class="img nav-item" style="vertical-align: middle; padding: 0 10px; font-size: 0; line-height: 0; text-align: left">
//                                       <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20iLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJ0aWN0YWlsIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                                         target="_blank" style="color: #a4a4a4; text-decoration: none">
//                                         <img src="https://marketplace.ttcdn.co/static/email/logo_white.png" alt="" border="0" style="margin: 0; padding: 0; max-width:56px" width="56" />
//                                       </a>
//                                     </td>
//                                     <td class="nav-item" style="vertical-align: middle; padding: 0 10px; line-height: 20px; font-size: 14px">
//                                       <a class="nav-category-link" href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F4X&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNFgiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJtZW5zIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                                         target="_blank" style='color: #fff; font-family: "Tictail Sans Regular", Arial, sans-serif; font-size: 14px; text-decoration: none; text-align: left'>
//                                         <span>Men</span>

//                                       </a>
//                                     </td>
//                                     <td class="nav-item" style="vertical-align: middle; padding: 0 10px; line-height: 20px; font-size: 14px">
//                                       <a class="nav-category-link" href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F4W&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNFciLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJ3b21lbnMiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                                         target="_blank" style='color: #fff; font-family: "Tictail Sans Regular", Arial, sans-serif; font-size: 14px; text-decoration: none; text-align: left'>
//                                         <span>Women</span>

//                                       </a>
//                                     </td>
//                                     <td class="nav-item" style="vertical-align: middle; padding: 0 10px; line-height: 20px; font-size: 14px">
//                                       <a class="nav-category-link" href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F52&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNTIiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJob21lIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                                         target="_blank" style='color: #fff; font-family: "Tictail Sans Regular", Arial, sans-serif; font-size: 14px; text-decoration: none; text-align: left'>
//                                         <span>Home</span>

//                                       </a>
//                                     </td>
//                                     <td class="nav-item" style="vertical-align: middle; padding: 0 10px; line-height: 20px; font-size: 14px">
//                                       <a class="nav-category-link" href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcategories%2Fart&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY2F0ZWdvcmllcy9hcnQiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJhcnQiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                                         target="_blank" style='color: #fff; font-family: "Tictail Sans Regular", Arial, sans-serif; font-size: 14px; text-decoration: none; text-align: left'>
//                                         <span>Art</span>

//                                       </a>
//                                     </td>
//                                   </tr>
//                                 </table>
//                               </td>
//                             </tr>
//                           </table>
//                         </td>
//                         <td class="content-spacing" style="font-size: 0; line-height: 0; text-align: left"></td>
//                       </tr>
//                     </table>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="14" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//               <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                 <tr>
//                   <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                 </tr>
//               </table>
//               <!-- END Header -->
//               <!-- Main -->
//               <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                 <tr>
//                   <td>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="20" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="25" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                       <tr>
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                         <td>
//                           <div class="consumer-headline" style="color:#000000; font-weight: bold; font-family:'Tictail Sans Bold', Arial, sans-serif; min-width:auto !important; font-size:30px; line-height:32px; text-align:center">
//                             <div>Hey Smiles Davis,</div>
//                             <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                               <tr>
//                                 <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                               </tr>
//                             </table>
//                             <div>thanks for joining Tictail!</div>
//                           </div>
//                         </td>
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                       </tr>
//                     </table>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <!-- Separator -->
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
//                       <tr>
//                         <td height="20" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                       <tr>
//                         <td align="center">
//                           <div style="font-size:0pt; line-height:0pt; height:1px; background:#ececec; width:160px;">
//                             <img src="https://marketplace.ttcdn.co/static/email/spacer.gif" width="1" height="1" style="height:1px" alt="" />
//                           </div>
//                         </td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
//                       <tr>
//                         <td height="20" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%; font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <!-- END Separator -->
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                       <tr style="display: block;">
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                         <td class="value-prop" valign="top" width="200">
//                           <div style="color:#000000; font-family:'Tictail Sans Bold', Arial, sans-serif; font-weight: bold; font-size:13px; line-height:19px; text-align:center">1. Shop and Discover</div>
//                           <div style="color:#8A8A8A; font-size:13px; line-height:19px; font-family:'Tictail Sans Regular', Arial, sans-serif; text-align:center;">unique products from global emerging brands.</div>
//                           <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                             <tr>
//                               <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                             </tr>
//                           </table>
//                         </td>
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                         <td class="value-prop" valign="top" width="200">
//                           <div style="color:#000000; font-family:'Tictail Sans Bold', Arial, sans-serif; font-weight: bold; font-size:13px; line-height:19px; text-align:center">2. Collect and Share</div>
//                           <div style="color:#8A8A8A; font-size:13px; line-height:19px; font-family:'Tictail Sans Regular', Arial, sans-serif; text-align:center;">fashion and home goods that reflect your style.</div>
//                           <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                             <tr>
//                               <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                             </tr>
//                           </table>
//                         </td>
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                         <td class="value-prop" valign="top" width="200">
//                           <div style="color:#000000; font-family:'Tictail Sans Bold', Arial, sans-serif; font-weight: bold; font-size:13px; line-height:19px; text-align:center">3. Follow and Connect</div>
//                           <div style="color:#8A8A8A; font-size:13px; line-height:19px; font-family:'Tictail Sans Regular', Arial, sans-serif; text-align:center;">with fellow shoppers and the brands you love.</div>
//                           <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                             <tr>
//                               <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                             </tr>
//                           </table>
//                         </td>
//                         <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                       </tr>
//                     </table>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="20" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="20" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                       <tr>
//                         <td>
//                           <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                             <tr>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F4W&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNFciLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJ3b21lbnMiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Women-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Women ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="img" width="5" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="m-td" width="5" style="font-size: 0; line-height: 0; text-align: left">
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="1" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F4X&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNFgiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJtZW5zIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Men-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Men ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcollections%2F52&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY29sbGVjdGlvbnMvNTIiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJob21lIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Home-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Home ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="img" width="5" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="m-td" width="5" style="font-size: 0; line-height: 0; text-align: left">
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="1" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcategories%2Fwomens-jewelry&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY2F0ZWdvcmllcy93b21lbnMtamV3ZWxyeSIsIm5hbWVzcGFjZSI6Im1hcmtldHBsYWNlIiwidG9rZW4iOiJlNWUzMjBjNDIzNjUxM2M2OGY0MmZlN2I1NGYzMmQ1YSIsIlVzZXIgSUQiOiJuMmhtIiwibGluayI6Impld2VscnkiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Jewelry-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Jewelry ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcategories%2Fdigital-art&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY2F0ZWdvcmllcy9kaWdpdGFsLWFydCIsIm5hbWVzcGFjZSI6Im1hcmtldHBsYWNlIiwidG9rZW4iOiJlNWUzMjBjNDIzNjUxM2M2OGY0MmZlN2I1NGYzMmQ1YSIsIlVzZXIgSUQiOiJuMmhtIiwibGluayI6InBvc3RlcnMiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Posters-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Posters ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="img" width="5" style="font-size: 0; line-height: 0; text-align: left"></td>
//                               <td class="m-td" width="5" style="font-size: 0; line-height: 0; text-align: left">
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="1" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                               <td class="thumb" style="vertical-align: top; font-size: 0; line-height: 0; text-align: left">
//                                 <div class="product">
//                                   <div style="text-align: center;">
//                                     <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fcategories%2Fwomens-accessories&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vY2F0ZWdvcmllcy93b21lbnMtYWNjZXNzb3JpZXMiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJhY2Nlc3NvcmllcyIsImRpc3RpbmN0X2lkIjoibjJobSIsInRlbXBsYXRlIjoibWFya2V0cGxhY2Vfd2VsY29tZSIsInNlcnZlZF9sb2NhbGUiOiJlbl9VUyJ9LCJldmVudCI6Ik5vdGlmaWNhdGlvbjogQ2xpY2tlZCBMaW5rIn0%3D"
//                                       style="color: #a4a4a4; text-decoration: none">
//                                       <img src="https://marketplace.ttcdn.co/static/email/welcome/category/Accessories-2.jpg" />
//                                     </a>
//                                   </div>
//                                   <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                                     <tr>
//                                       <td class="text-product-title" style='color: #000; font-family: "Tictail Sans Regular", Arial, sans-serif; min-width: auto; font-size: 12px; line-height: 15px; text-align: center; font-weight: bold;'>
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>Shop Accessories ›
//                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                           <tr>
//                                             <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </div>
//                               </td>
//                               <td class="content-spacing" width="15" style="font-size: 0; line-height: 0; text-align: left"></td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                                   <tr>
//                                     <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                                   </tr>
//                                 </table>
//                               </td>
//                             </tr>
//                           </table>
//                         </td>
//                       </tr>
//                     </table>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="50" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//               <!-- END Main -->
//               <!-- Footer -->
//               <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                 <tr>
//                   <td class="img" style="font-size: 0; line-height: 0; text-align: left; font-size:0pt; line-height:0pt; text-align:left" width="14"></td>
//                   <td>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="img-center" style="font-size:0pt; line-height:0pt; text-align:center">
//                       <img src="https://marketplace.ttcdn.co/static/email/logo_black.png" alt="" border="0" style="margin: 0; padding: 0;max-width:56px" width="56" />
//                     </div>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="5" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="15" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="text-footer" style="color:#a4a4a4; font-family:'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif; min-width:auto !important; font-size:11px; line-height:20px; text-align:center">
//                       <div>
//                         <a class="link-black" href="https://api.mixpanel.com/track/?redirect=http%3A%2F%2Fwww.facebook.com%2Ftictail&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHA6Ly93d3cuZmFjZWJvb2suY29tL3RpY3RhaWwiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJmYWNlYm9vayIsImRpc3RpbmN0X2lkIjoibjJobSIsInRlbXBsYXRlIjoibWFya2V0cGxhY2Vfd2VsY29tZSIsInNlcnZlZF9sb2NhbGUiOiJlbl9VUyJ9LCJldmVudCI6Ik5vdGlmaWNhdGlvbjogQ2xpY2tlZCBMaW5rIn0%3D"
//                           style="color: #000; text-decoration: none; color:#000000; text-decoration:none; margin-right: 10px" target="_blank">
//                           <span class="link-black" style="color:#000000; text-decoration:none">Facebook</span>

//                         </a>
//                         <a class="link-black" href="https://api.mixpanel.com/track/?redirect=http%3A%2F%2Finstagram.com%2Ftictail&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHA6Ly9pbnN0YWdyYW0uY29tL3RpY3RhaWwiLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJpbnN0YWdyYW0iLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                           style="color: #000; text-decoration: none; color:#000000; text-decoration:none; margin-right: 10px" target="_blank">
//                           <span class="link-black" style="color:#000000; text-decoration:none">Instagram</span>

//                         </a>
//                         <a class="link-black" href="https://api.mixpanel.com/track/?redirect=http%3A%2F%2Fwww.twitter.com%2Ftictail&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHA6Ly93d3cudHdpdHRlci5jb20vdGljdGFpbCIsIm5hbWVzcGFjZSI6Im1hcmtldHBsYWNlIiwidG9rZW4iOiJlNWUzMjBjNDIzNjUxM2M2OGY0MmZlN2I1NGYzMmQ1YSIsIlVzZXIgSUQiOiJuMmhtIiwibGluayI6InR3aXR0ZXIiLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                           style="color: #000; text-decoration: none; color:#000000; text-decoration:none;  margin-right: 10px" target="_blank">
//                           <span class="link-black" style="color:#000000; text-decoration:none">Twitter</span>

//                         </a>
//                         <a href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com%2Fblog&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20vYmxvZyIsIm5hbWVzcGFjZSI6Im1hcmtldHBsYWNlIiwidG9rZW4iOiJlNWUzMjBjNDIzNjUxM2M2OGY0MmZlN2I1NGYzMmQ1YSIsIlVzZXIgSUQiOiJuMmhtIiwibGluayI6ImJsb2ciLCJkaXN0aW5jdF9pZCI6Im4yaG0iLCJ0ZW1wbGF0ZSI6Im1hcmtldHBsYWNlX3dlbGNvbWUiLCJzZXJ2ZWRfbG9jYWxlIjoiZW5fVVMifSwiZXZlbnQiOiJOb3RpZmljYXRpb246IENsaWNrZWQgTGluayJ9"
//                           style="color: #a4a4a4; text-decoration: none; color: #a4a4a4;text-decoration: none;">
//                           <span class="link-black" style="color:#000000; text-decoration:none">Blog</span>

//                         </a>
//                       </div>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="text-footer" style="color:#a4a4a4; font-family:'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif; min-width:auto !important; font-size:11px; line-height:20px; text-align:center">
//                       <div>Copyright © 2016 Tictail, All rights reserved.
//                         <br />You are receiving this email because you have an account on
//                         <a class="link-u" href="https://api.mixpanel.com/track/?redirect=https%3A%2F%2Ftictail.com&amp;data=eyJwcm9wZXJ0aWVzIjp7InVybCI6Imh0dHBzOi8vdGljdGFpbC5jb20iLCJuYW1lc3BhY2UiOiJtYXJrZXRwbGFjZSIsInRva2VuIjoiZTVlMzIwYzQyMzY1MTNjNjhmNDJmZTdiNTRmMzJkNWEiLCJVc2VyIElEIjoibjJobSIsImxpbmsiOiJ0aWN0YWlsIiwiZGlzdGluY3RfaWQiOiJuMmhtIiwidGVtcGxhdGUiOiJtYXJrZXRwbGFjZV93ZWxjb21lIiwic2VydmVkX2xvY2FsZSI6ImVuX1VTIn0sImV2ZW50IjoiTm90aWZpY2F0aW9uOiBDbGlja2VkIExpbmsifQ%3D%3D"
//                           style="color: #a4a4a4; text-decoration: none; color:#a4a4a4; text-decoration:underline" target="_blank"><u class="link-u" style="color:#a4a4a4; text-decoration:underline">Tictail</u></a>
//                         <br />Malmskillnadsgatan 32, Stockholm 111 51, Sweden
//                         <br />
//                         <br />
//                         <a class="link-black-u" href="#"
//                           style="color: #a4a4a4; text-decoration: none; color:#000000; text-decoration:underline" target="_blank">Unsubscribe</a>
//                       </div>
//                     </div>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="30" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                     <div class="hide-for-mobile">
//                       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                         <tr>
//                           <td height="10" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                         </tr>
//                       </table>
//                     </div>
//                     <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">
//                       <tr>
//                         <td height="30" class="spacer" style="font-size: 0; line-height: 0; text-align: center; width: 100%; min-width: 100%">&nbsp;</td>
//                       </tr>
//                     </table>
//                   </td>
//                   <td class="img" style="font-size: 0; line-height: 0; text-align: left; font-size:0pt; line-height:0pt; text-align:left" width="14"></td>
//                 </tr>
//               </table>
//               <!-- END Footer -->
//               <div class="wgmail" style="font-size:0pt; line-height:0pt; text-align:center">
//                 <img src="https://marketplace.ttcdn.co/static/email/spacer.gif" width="600" height="1" style="min-width:600px" alt="" border="0" />
//               </div>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
//   <img 
//     alt="" width="1" height="1" />
//   <img 
//     alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"
//   />
// </body>

// </html>`; 

// let output = `<div style="max-width:550px; min-width:320px;  background-color: white; border: 1px solid #DDDDDD; margin-right: auto; margin-left: auto;">
// <div style="margin-left:30px;margin-right:30px">
//     <p>&nbsp;</p>
//     <p><a href="https://logico.com.ar" style="text-decoration:none;font-family:Verdana, Geneva, sans-serif;font-weight: bold; color: #3D3D3D;font-size: 15px">@Austin Fusion FC</a></p>
//     <hr style="margin-top:10px;margin-bottom:65px;border:none;border-bottom:1px solid red"
//     />
//     <h1 style="font-family: Tahoma, Geneva, sans-serif; font-weight: normal; color: #2A2A2A; text-align: center; margin-bottom: 65px;font-size: 20px; letter-spacing: 6px;font-weight: normal; border: 2px solid black; padding: 15px;">Soccer Practice Reminder!</h1>
//     <p style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">
//     ${moment().format("MMM Do YYYY")}
//    </p>
//     <h3 style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-style:italic;font-weight:500">Your appearance is <span style="border-bottom: 1px solid red">very important</span> to us:</h3>
//     <p style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">Just a friendly reminder, we have our Saturday game tomorrow.
//         Bring your water, soccer ball, and based upon the temperatures – make sure you
//         are dressed appropriately.</p>

//     <p style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">
//         Location : 1600 Gattis School Rd, Round Rock, TX 78664
//     </p>

//     <table style="width:100%;">
//         <th>
//             <td style="width:25%"></td>
//             <td style="background-color:black;with:50%;text-align:center;padding:15px"><a href="https://logico.com.ar/" style="margin-left: auto; margin-right: auto;text-decoration:none;color: white;text-align:center;font-family:Courier New, Courier, monospace;font-weight:600;letter-spacing:2px;background-color:black;padding:15px">CONFIRM</a></td>
//             <td
//                 style="width:25%"></td>
//         </th>
//     </table>
//     <hr style="margin-top:10px;margin-top:75px" />
//     <p style="text-align:center;margin-bottom:15px"><small style="text-align:center;font-family:Courier New, Courier, monospace;font-size:10px;color#666;">@Copy Right <a href="https://logico.com.ar/" style="color:#666"> Kevin Nguyen</a> | Your Captain <span style="color:red">&hearts;</span> </small></p>
//     <p>&nbsp;</p>
// </div>
// </div>`; 
// // Step 2
// // POST method route
// // app.post('/', function (req, res) {
// //     console.log (JSON.Stringify("Hello There"))
// //     // let mailOptions = {
//     //     from: 'muahua51@gmail.com', // TODO: email sender
//     //     to: 'an.nguyen1197@gmail.com', // TODO: email receiver
//     //     subject: 'Nodemailer - Test',
//     //     text: 'Wooohooo it works!!',
//     //     html: welcome
//     // };
    
//     // // Step 3
//     // transporter.sendMail(mailOptions, (err, data) => {
//     //     if (err) {
//     //         return log('Error occurs');
//     //     }
//     //     return log('Email sent!!!');
//     // });
// // })
// const port = 5000
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-reqed-With, Content-Type, Accept");
//     next();
//   });

// // app.use(express.urlencoded());

// // // Parse JSON bodies (as sent by API clients)
// // app.use(express.json());

// router.post('/subscribe',(req, res) => {
//     console.log (req.body)
//     var data = {
//         "Fruits": [
//           "apple",
//           "orange"    ]
//       };
//       res.send(data);
// })

// app.get('/', (req, res) => res.send('Hello World!'))
//     console.log ("Hello")
//         // var data = {
//         //     "Fruits": [
//         //       "apple",
//         //       "orange"    ]
//         //   };
    

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = express.Router();
const app = express();
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-reqed-With, Content-Type, Accept");
        next();
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use (cors)
app.post('/subscribe',(req, res) => {
    console.log (req.body)
    console.log ("Made request")
    var data = {
            "Fruits": [
              "apple",
              "orange"    ]
    };
  res.send(data);
});

app.listen(5000,() => {
  console.log("Started on PORT 5000");
})