import React, { useState } from 'react';
import './settings.css';
import {
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Button,
  Typography,
  Divider,
  Grid,
  Paper,
  Alert
} from '@mui/material';
import {
  Settings as SettingsIcon,
  School as LearnerIcon,
  People as ManagerIcon,
  Notifications as NotificationIcon,
  Security as SecurityIcon,
  Save as SaveIcon,
  Lock as LockIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    siteName: 'Learning Portal',
    timezone: 'UTC',
    defaultLanguage: 'en',
    learnerProfileCompletion: true,
    maxCoursesPerLearner: 5,
    managerDashboardAccess: 'advanced',
    emailNotifications: true
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    // Add your save logic here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        <SettingsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        System Settings
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Configure system-wide settings for learners and managers.
      </Alert>

      <Paper elevation={2} sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="General" icon={<SettingsIcon />} />
          <Tab label="Learners" icon={<LearnerIcon />} />
          <Tab label="Managers" icon={<ManagerIcon />} />
          <Tab label="Notifications" icon={<NotificationIcon />} />
          <Tab label="Security" icon={<SecurityIcon />} />
        </Tabs>
      </Paper>

      <Card component="form" onSubmit={handleSubmit}>
        <CardContent>
          {activeTab === 0 && (
            <GeneralSettings settings={settings} handleChange={handleChange} />
          )}
          {activeTab === 1 && (
            <LearnerSettings settings={settings} handleChange={handleChange} />
          )}
          {activeTab === 2 && (
            <ManagerSettings settings={settings} handleChange={handleChange} />
          )}
          {activeTab === 3 && (
            <NotificationSettings settings={settings} handleChange={handleChange} />
          )}
          {activeTab === 4 && (
            <SecuritySettings settings={settings} handleChange={handleChange} />
          )}

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SaveIcon />}
              size="large"
            >
              Save Settings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

// Sub-components
const GeneralSettings = ({ settings, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <TextField
        fullWidth
        label="Site Name"
        name="siteName"
        value={settings.siteName}
        onChange={handleChange}
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Timezone</InputLabel>
        <Select
          label="Timezone"
          name="timezone"
          value={settings.timezone}
          onChange={handleChange}
        >
          <MenuItem value="UTC">UTC</MenuItem>
          <MenuItem value="EST">Eastern Time (EST)</MenuItem>
          <MenuItem value="PST">Pacific Time (PST)</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Default Language</InputLabel>
        <Select
          label="Default Language"
          name="defaultLanguage"
          value={settings.defaultLanguage}
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
);

const LearnerSettings = ({ settings, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Switch
            checked={settings.learnerProfileCompletion}
            onChange={handleChange}
            name="learnerProfileCompletion"
            color="primary"
          />
        }
        label="Require Profile Completion"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        fullWidth
        label="Maximum Active Courses"
        name="maxCoursesPerLearner"
        type="number"
        value={settings.maxCoursesPerLearner}
        onChange={handleChange}
        variant="outlined"
        InputProps={{ inputProps: { min: 1, max: 10 } }}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControlLabel
        control={
          <Switch
            checked={settings.allowSelfEnrollment}
            onChange={handleChange}
            name="allowSelfEnrollment"
            color="primary"
          />
        }
        label="Allow Self Enrollment"
      />
    </Grid>
  </Grid>
);

const ManagerSettings = ({ settings, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Dashboard Access Level</InputLabel>
        <Select
          label="Dashboard Access Level"
          name="managerDashboardAccess"
          value={settings.managerDashboardAccess}
          onChange={handleChange}
        >
          <MenuItem value="basic">Basic Reports</MenuItem>
          <MenuItem value="advanced">Advanced Analytics</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControlLabel
        control={
          <Switch
            checked={settings.canCreateCourses}
            onChange={handleChange}
            name="canCreateCourses"
            color="primary"
          />
        }
        label="Allow Course Creation"
      />
    </Grid>
  </Grid>
);

const NotificationSettings = ({ settings, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        <EmailIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
        Email Notifications
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={settings.emailNotifications}
            onChange={handleChange}
            name="emailNotifications"
            color="primary"
          />
        }
        label="Enable Email Notifications"
      />
    </Grid>
  </Grid>
);

const SecuritySettings = ({ settings, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        <LockIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
        Authentication
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
        <InputLabel>Password Complexity</InputLabel>
        <Select
          label="Password Complexity"
          name="passwordComplexity"
          value={settings.passwordComplexity || 'medium'}
          onChange={handleChange}
        >
          <MenuItem value="low">Low (6+ characters)</MenuItem>
          <MenuItem value="medium">Medium (8+ with mix)</MenuItem>
          <MenuItem value="high">High (12+ with special chars)</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
);

export default AdminSettings;