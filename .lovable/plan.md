

## Integrate EmailJS with Contact Form

### Summary
Connect the contact form to EmailJS to send real emails when someone submits the form. This will:
1. Send a notification email to you (Yojitha) with the recruiter's details
2. Send an auto-reply email to the recruiter confirming receipt
3. Display a success message and reset the form after 5 seconds

---

### EmailJS Configuration

**Credentials provided:**
- Service ID: `service_s6uz55p`
- Public Key: `ABTqA-qMU-9z-eb0L`
- Contact Us Template ID: `template_30mcorh` (notifies you)
- Auto-Reply Template ID: `template_3aodb64` (confirms to sender)

**Note:** The EmailJS public key is safe to include in frontend code - it's designed to be public and only works with your configured templates.

---

### Implementation Steps

#### 1. Install EmailJS Package

Add the `@emailjs/browser` package to the project dependencies.

#### 2. Update ContactSection Component

**File: `src/components/portfolio/ContactSection.tsx`**

**Changes:**
- Import and initialize EmailJS with your public key
- Add a `messageSent` state to track successful submission
- Update `handleSubmit` to:
  - Send the "Contact Us" template (notifies you)
  - Send the "Auto-Reply" template (confirms to sender)
  - Show success UI on completion
  - Reset form after 5 seconds
- Add conditional rendering for success message

**Template Parameters Mapping:**

For `template_30mcorh` (Contact Us - notifies you):
```javascript
{
  name: formData.name,
  recruiter_email: formData.email,
  message: formData.message,
  submitted_at: new Date().toLocaleString()
}
```

For `template_3aodb64` (Auto-Reply - confirms to sender):
```javascript
{
  name: formData.name,
  recruiter_email: formData.email
}
```

---

### Updated Component Structure

```tsx
const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ ... });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification email to Yojitha
      await emailjs.send("service_s6uz55p", "template_30mcorh", {
        name: formData.name,
        recruiter_email: formData.email,
        message: formData.message,
        submitted_at: new Date().toLocaleString(),
      });

      // Send auto-reply to recruiter
      await emailjs.send("service_s6uz55p", "template_3aodb64", {
        name: formData.name,
        recruiter_email: formData.email,
      });

      setMessageSent(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setMessageSent(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message when sent
  if (messageSent) {
    return (
      <section className="animate-fade-in">
        {/* Success UI with checkmark */}
      </section>
    );
  }

  return (
    // Existing form UI
  );
};
```

---

### Success Message UI

When the form is submitted successfully, display:
- A checkmark icon with animation
- "Your message has been received!" heading
- "Thank you for reaching out. I'll get back to you within 24-48 hours." description
- A note that the form will reset automatically

---

### Files to Modify

| File | Action |
|------|--------|
| `package.json` | Add `@emailjs/browser` dependency |
| `src/components/portfolio/ContactSection.tsx` | Integrate EmailJS and add success state |

---

### User Experience Flow

1. User fills out the contact form
2. User clicks "Send Message"
3. Button shows loading spinner
4. Two emails are sent (notification + auto-reply)
5. Form is replaced with success message
6. After 5 seconds, form reappears empty and ready for new submission

