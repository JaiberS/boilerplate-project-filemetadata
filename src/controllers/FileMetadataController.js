class FileMetadataController {

  async importFile(req, res) {
    try {
      console.log(`FileMetadataController.redirection : REQUEST--> ${JSON.stringify(req.body)}
      & ${JSON.stringify(req.file)}`);
      const { originalname, mimetype, size } = req.file
      res.json({
        name: originalname,
        type: mimetype,
        size
      })

    } catch (error) {
      console.error(`error:${error}`);
      res.status(error.statusCode || 400).json({ error: 'Invalid URL' });
    }
  }
}

module.exports = new FileMetadataController();
