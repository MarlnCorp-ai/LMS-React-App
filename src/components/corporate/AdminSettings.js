// import React, { useState } from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'react-toastify';

// const AdminMasterSettingsPage = () => {
//   const [settings, setSettings] = useState({
//     siteName: '',
//     logoUrl: '',
//     enable2FA: false,
//     enableEmailVerification: true,
//     defaultLanguage: 'en',
//     certificateMessage: '',
//     enableNotifications: true,
//   });

//   const handleChange = (key, value) => {
//     setSettings(prev => ({ ...prev, [key]: value }));
//   };

//   const handleSave = () => {
//     // Save logic (e.g., API call)
//     toast.success('Settings saved successfully!');
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Admin Master Settings</h1>
//         <Button onClick={handleSave}>Save Settings</Button>
//       </div>

//       <Tabs defaultValue="general">
//         <TabsList>
//           <TabsTrigger value="general">General</TabsTrigger>
//           <TabsTrigger value="user">User Management</TabsTrigger>
//           <TabsTrigger value="course">Course</TabsTrigger>
//           <TabsTrigger value="certificate">Certificate</TabsTrigger>
//           <TabsTrigger value="notifications">Notifications</TabsTrigger>
//           <TabsTrigger value="billing">Billing</TabsTrigger>
//           <TabsTrigger value="appearance">Appearance</TabsTrigger>
//           <TabsTrigger value="security">Security</TabsTrigger>
//           <TabsTrigger value="integrations">Integrations</TabsTrigger>
//           <TabsTrigger value="advanced">Advanced</TabsTrigger>
//         </TabsList>

//         <TabsContent value="general">
//           <Card>
//             <CardContent className="space-y-4 p-6">
//               <div>
//                 <Label>Site Name</Label>
//                 <Input
//                   value={settings.siteName}
//                   onChange={e => handleChange('siteName', e.target.value)}
//                 />
//               </div>
//               <div>
//                 <Label>Logo URL</Label>
//                 <Input
//                   value={settings.logoUrl}
//                   onChange={e => handleChange('logoUrl', e.target.value)}
//                 />
//               </div>
//               <div>
//                 <Label>Default Language</Label>
//                 <Input
//                   value={settings.defaultLanguage}
//                   onChange={e => handleChange('defaultLanguage', e.target.value)}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="user">
//           <Card>
//             <CardContent className="space-y-4 p-6">
//               <div className="flex items-center justify-between">
//                 <Label>Email Verification</Label>
//                 <Switch
//                   checked={settings.enableEmailVerification}
//                   onCheckedChange={value => handleChange('enableEmailVerification', value)}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="course">
//           <Card>
//             <CardContent className="p-6">
//               <p>Course settings will go here...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="certificate">
//           <Card>
//             <CardContent className="space-y-4 p-6">
//               <div>
//                 <Label>Certificate Message</Label>
//                 <Textarea
//                   value={settings.certificateMessage}
//                   onChange={e => handleChange('certificateMessage', e.target.value)}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="notifications">
//           <Card>
//             <CardContent className="space-y-4 p-6">
//               <div className="flex items-center justify-between">
//                 <Label>Enable Notifications</Label>
//                 <Switch
//                   checked={settings.enableNotifications}
//                   onCheckedChange={value => handleChange('enableNotifications', value)}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="billing">
//           <Card>
//             <CardContent className="p-6">
//               <p>Billing settings will go here...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="appearance">
//           <Card>
//             <CardContent className="p-6">
//               <p>Appearance customization options will go here...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="security">
//           <Card>
//             <CardContent className="space-y-4 p-6">
//               <div className="flex items-center justify-between">
//                 <Label>Enable 2FA</Label>
//                 <Switch
//                   checked={settings.enable2FA}
//                   onCheckedChange={value => handleChange('enable2FA', value)}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="integrations">
//           <Card>
//             <CardContent className="p-6">
//               <p>API keys and integrations config will go here...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="advanced">
//           <Card>
//             <CardContent className="p-6">
//               <p>Advanced settings and feature toggles will go here...</p>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default AdminMasterSettingsPage;
