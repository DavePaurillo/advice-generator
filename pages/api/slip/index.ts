export default async function handler(req: any, res: any) {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    const initialSlip = await data.slip;

    res.status(200).json(initialSlip);
}
