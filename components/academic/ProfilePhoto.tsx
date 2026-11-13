export default function ProfilePhoto() {
  return (
    <img
      src="/myself.jpg"
      alt="Goksu Alcinkaya, Computer Engineer based in New York City"
      width={180}
      height={219}
      className="ac-photo"
      fetchPriority="high"
    />
  )
}
