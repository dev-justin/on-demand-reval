export default function CoinPage({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}
