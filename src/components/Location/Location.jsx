
const Location = () => {
  return (
    <div>
      <div className="container pb-10">
        <h1 className="inline-block mb-4 border-l-8 border-primary/50 pl-2 py-2 text-xl sm:text-3xl font-bold">Location to visit</h1>
        <div className="rounded-xl">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28947.945459028346!2d66.99570193656305!3d24.91526363120876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbd469d9bcd%3A0x749325c6e39952f3!2sNazimabad%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739872516309!5m2!1sen!2s"
      width="100%"
      height="360"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ borderRadius: "20px" }}
    ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Location
