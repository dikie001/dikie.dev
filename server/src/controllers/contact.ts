import { Request, Response } from 'express';
import type { ContactFormData, ApiResponse } from '../types';

export const submitContactForm = async (
    req: Request<{}, {}, ContactFormData>,
    res: Response<ApiResponse>
) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and message are required',
            });
        }

        // TODO: Add email sending logic here (e.g., using nodemailer, SendGrid, etc.)
        console.log('Contact form submission:', { name, email, message });

        res.status(200).json({
            success: true,
            data: { message: 'Message sent successfully!' },
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message',
        });
    }
};
