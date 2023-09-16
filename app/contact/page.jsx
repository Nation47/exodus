import Link from "next/link";

const contact = () => {
    return (
        <>
            <div className="p-10 bg-gray-100 mb-10">
                <h2 className="text-xl uppercase font-semibold">contact us</h2>
                <p className="ml-3">
                    We value your feedback, questions, and suggestions! Feel free to get in touch with us using any of the following methods:
                </p>
                <p className="ml-3">                
                    Use the contact form below to send us a message directly from our website. We will get back to you as soon as possible.

                    [Contact Form]
                </p>

                <h2 className="uppercase font-semibold text-md mt-3">Email:</h2>
                <p className="ml-3">
                    For general inquiries or collaboration opportunities, you can reach us  
                      at <Link href='/' className="text-blue-800">hananiyusuph98@gmail.com</Link> 
                </p>

                <h2 className="uppercase font-semibold text-md mt-3">Social Media:</h2>
                <p className="ml-3">
                    Stay connected with us on social media for the latest updates and tech discussions: <br />
                    - Twitter: <Link href='/' className="text-blue-800">https://twitter.com/hannan_py</Link> <br />
                    - Facebook: <Link href='/' className="text-blue-800">https://www.facebook.com/hannan TechBlog</Link> <br />
                    - Instagram: <Link href='/' className="text-blue-800">https://www.instagram.com/hannan TechBlog</Link>
                </p>

                <h2 className="uppercase font-semibold text-md mt-3">Business Hours:</h2>
                <p className="ml-3">Our team is available from Monday to Friday, 9:00 AM to 5:00 PM (GMT).</p>

                <h2 className="uppercase font-semibold text-md mt-3">FAQs (Frequently Asked Questions):</h2>
                <p className="ml-3">Before reaching out, you might find the answer to your question in our FAQs section. Check it out <Link href='/faq' className="text-blue-800">FAQ</Link> .</p>

                <h2 className="uppercase font-semibold text-md mt-3">Advertising and Partnerships:</h2>
                <p className="ml-3">For advertising inquiries or potential partnerships, please email us at <Link href='/' className="text-blue-800">hananiyusuph98@gmail.com</Link> .</p>

                <h2 className="uppercase font-semibold text-md mt-3">Support:</h2>
                <p className="ml-3">If you need technical support or encounter any issues with our website, reach out to our support team at <Link href='/' className="text-blue-800">hananiyusuph98@gmail.com</Link> .</p>

                <h2 className="uppercase font-semibold text-md mt-3">Privacy Policy:</h2>
                <p className="ml-3">To learn more about how we handle your data and protect your privacy, please review our Privacy Policy <Link href='/' className="text-blue-800">Privacy & Policy</Link> </p>
                <p className="ml-3">
                    We look forward to hearing from you and appreciate your interest in our blog. Your feedback helps us improve and deliver valuable content to our readers. Thank you for being a part of our tech community! <br />

                    - The Hannan's Tech Blog Team
                </p>
            </div>
        </>
    );
}
 
export default contact;