import { ImageResponse } from 'next/og';

export async function GET() {
    return new ImageResponse(
        (

            <img
                src="http://localhost:3000/og-image.png"
                alt="Shivam | Full Stack Developer Portfolio"
                width="1200"
                height="630"
            />
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
