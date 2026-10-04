import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ArrowUpRight,
  Clock,
  Building,
  ShieldCheck,
  Instagram,
  Facebook,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { images, companyContact } from "@/lib/amg-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Abid Munir Group | Khushab, Pakistan" },
      {
        name: "description",
        content:
          "Contact Abid Munir Group for Manufacturing, Processing, General Order Supply, Coal, Salt, Stone Dust, Minerals & Logistics in Khushab, Pakistan. Phone: +923006043924.",
      },
      {
        property: "og:title",
        content: "Contact Abid Munir Group — Let's Work Together",
      },
      {
        property: "og:description",
        content:
          "Reach our team in Khushab, Pakistan for commercial and industrial supply solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    productOrService: "Coal Supply",
    requirement: "",
  });
  const [submittedMethod, setSubmittedMethod] = useState<"email" | "whatsapp" | null>(null);

  const handleSubmitEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Business Requirement: ${formData.productOrService} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || "N/A"}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Product/Service Category: ${formData.productOrService}\n\n` +
      `Requirement Details:\n${formData.requirement}\n\n` +
      `Sent from Abid Munir Group Website`
    );
    setSubmittedMethod("email");
    window.location.href = `mailto:${companyContact.email}?subject=${subject}&body=${body}`;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Abid Munir Group,\n\n` +
      `Name: ${formData.name || "Business Client"}\n` +
      `Company: ${formData.company || "N/A"}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Category: ${formData.productOrService}\n` +
      `Requirement: ${formData.requirement || "I would like to inquire about your supply & pricing."}`
    );
    setSubmittedMethod("whatsapp");
    window.open(`https://wa.me/${companyContact.whatsapp2}?text=${text}`, "_blank");
  };

  return (
    <>
      <PageIntro
        eyebrow="LET'S WORK TOGETHER"
        title="Start a conversation with our supply team."
        description="Whether you are looking for a reliable supplier, trading partner, general order supply solution or logistics support, Abid Munir Group is ready to discuss your requirements."
        image={images.mineralMining}
      />

      {/* Main Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left: Contact Info & Address */}
          <div>
            <span className="eyebrow text-brand">GET IN TOUCH</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl text-foreground">
              Abid Munir Group
            </h2>
            <p className="mt-3 font-display text-lg font-bold text-brand-soft italic">
              Honouring a legacy. Building a vision. Shaping the future.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Our representative desk in Khushab, Punjab connects with industrial buyers, contractors, and trading partners across all provinces of Pakistan.
            </p>

            <div className="mt-10 grid gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4 border border-border bg-card p-5">
                <div className="p-2.5 bg-brand/10 text-brand">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="eyebrow block text-muted-foreground">PHONE</span>
                  <a
                    href={`tel:${companyContact.phone}`}
                    className="mt-1 block font-display text-xl font-bold uppercase text-foreground hover:text-brand transition-colors"
                  >
                    {companyContact.phoneDisplay}
                  </a>
                  <span className="text-xs text-muted-foreground">Direct calls & business inquiries</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 border border-border bg-card p-5">
                <div className="p-2.5 bg-red-600/10 text-red-600">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <span className="eyebrow block text-muted-foreground">WHATSAPP INQUIRIES</span>
                  <div className="mt-1 flex flex-wrap gap-x-2 font-display text-lg font-bold text-foreground">
                    <a
                      href={`https://wa.me/${companyContact.whatsapp1}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-red-600 transition-colors"
                    >
                      {companyContact.whatsapp1Display}
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href={`https://wa.me/${companyContact.whatsapp2}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-red-600 transition-colors"
                    >
                      {companyContact.whatsapp2Display}
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href={companyContact.socials.whatsappQr}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:underline"
                    >
                      Scan Official WhatsApp QR Code <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border border-border bg-card p-5">
                <div className="p-2.5 bg-brand/10 text-brand">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="eyebrow block text-muted-foreground">EMAIL</span>
                  <a
                    href={`mailto:${companyContact.email}`}
                    className="mt-1 block font-display text-lg font-bold text-foreground hover:text-brand break-all transition-colors"
                  >
                    {companyContact.email}
                  </a>
                  <span className="text-xs text-muted-foreground">Formal RFQs, contracts & tender inquiries</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 border border-border bg-card p-5">
                <div className="p-2.5 bg-brand/10 text-brand">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <span className="eyebrow block text-muted-foreground">HEAD OFFICE LOCATION</span>
                  <p className="mt-1 font-semibold text-foreground text-sm leading-relaxed">
                    {companyContact.location}
                  </p>
                  <span className="text-xs text-muted-foreground">Khushab, Punjab, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-border">
              <span className="eyebrow block text-muted-foreground mb-3">FOLLOW US ON SOCIAL MEDIA</span>
              <div className="flex items-center gap-4">
                <a
                  href={companyContact.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-border bg-card px-4 py-2 text-xs font-bold uppercase text-foreground hover:bg-brand hover:text-white transition"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
                <a
                  href={companyContact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-border bg-card px-4 py-2 text-xs font-bold uppercase text-foreground hover:bg-brand hover:text-white transition"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right: SEND US YOUR REQUIREMENT Form */}
          <div className="border border-border bg-muted/80 p-8 md:p-12 shadow-sm">
            <span className="eyebrow text-brand">SEND US YOUR REQUIREMENT</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-foreground md:text-4xl">
              Tell Us What You Need
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what product, material or service you require. Our team will review your requirement and get back to you with a suitable supply or business solution.
            </p>

            <form onSubmit={handleSubmitEmail} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Your Full Name *
                  </label>
                  <Input
                    required
                    placeholder="e.g. Malik Tariq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Company / Organization
                  </label>
                  <Input
                    placeholder="e.g. Punjab Power / ABC Mills"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="e.g. +92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="e.g. info@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  Product or Service Category *
                </label>
                <select
                  className="flex h-10 w-full rounded-none border border-input bg-card px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.productOrService}
                  onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                >
                  <option value="Coal Mining & Supply">Coal Mining & Supply</option>
                  <option value="Salt Mining & Processing">Salt Mining & Processing</option>
                  <option value="Stone Dust & Crushing Plant">Stone Dust & Crushing Plant</option>
                  <option value="Silica Sand Supply">Silica Sand Supply</option>
                  <option value="Bauxite Sourcing">Bauxite Sourcing</option>
                  <option value="Gypsum Supply">Gypsum Supply</option>
                  <option value="Copper Ore Trading">Copper Ore Trading</option>
                  <option value="Construction & Infrastructure Materials">Construction & Infrastructure Materials</option>
                  <option value="Agricultural & Food Commodities">Agricultural & Food Commodities</option>
                  <option value="Industrial & Building Materials">Industrial & Building Materials</option>
                  <option value="Logistics & Transport Solutions">Logistics & Transport Solutions</option>
                  <option value="General Order / Other">Other General Order Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  Describe Your Requirement (Quantity, Destination, Specs) *
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="Provide details about expected tons/volume, delivery schedule, destination in Pakistan, and required specifications..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="bg-card"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button type="submit" variant="brand" size="xl" className="flex-1">
                  <Send className="mr-2 size-4" /> Send Requirement via Email
                </Button>

                <Button
                  type="button"
                  variant="contrast"
                  size="xl"
                  onClick={handleSendWhatsApp}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <MessageCircle className="mr-2 size-4" /> Send via WhatsApp
                </Button>
              </div>

              {submittedMethod && (
                <div className="p-4 bg-card border border-border text-xs text-muted-foreground">
                  {submittedMethod === "email" ? (
                    <p className="text-green-600 font-semibold">
                      Your default mail client is preparing the requirement draft to send to <strong className="text-foreground">abidmunirawan@gmail.com</strong>.
                    </p>
                  ) : (
                    <p className="text-red-600 font-semibold">
                      Opening WhatsApp to chat directly with Abid Munir Group (+92 300 6043924).
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
