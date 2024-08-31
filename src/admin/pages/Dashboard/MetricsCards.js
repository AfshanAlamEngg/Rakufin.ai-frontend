import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const MetricsCards = ({ metrics }) => {
    const metricsData = [
        { label: 'Total A', value: metrics.totalUsers, color: '#e3f2fd' },
        { label: 'Total B', value: metrics.totalProperties, color: '#fce4ec' },
        { label: 'Total C', value: metrics.totalBookings, color: '#fff3e0' },
        { label: 'Total D', value: metrics.totalMaintenanceRequests, color: '#e8f5e9' },
        { label: 'Total E', value: metrics.totalLandlords, color: '#f1f8e9' },
        { label: 'Total F', value: metrics.totalMaintenanceStaff, color: '#e1bee7' },
        { label: 'Total G', value: `${metrics.avgBookingDuration} days`, color: '#ffecb3' },
        { label: 'Total H', value: metrics.pendingMaintenanceRequests, color: '#cfd8dc' },
    ];

    return (
        <Grid container spacing={2}>
            {metricsData.map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ backgroundColor: metric.color, borderRadius: '8px', height: 150 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="div">
                                {metric.label}
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                {metric.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MetricsCards;
