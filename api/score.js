let score = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { guess } = req.body;
    const random = Math.floor(Math.random() * 5) + 1;

    if (guess === random) {
      score++;
      res.status(200).json({
        message: `Správně! Číslo bylo ${random}`,
        score
      });
    } else {
      res.status(200).json({
        message: `Špatně! Číslo bylo ${random}`,
        score
      });
    }
  } else {
    res.status(200).json({ score });
  }
}
