const uploadImage = (uploader, dataUri) => (req, res) => {
    if(req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file)
            .then(result => {
                const image = result.url;

                const response = {
                    message: "successfully uploaded",
                    data: {image}
                };

                return res.status(200).json(response);
            })
            .catch(error => {
                const response = {
                    message: "something went wrong while processing your request",
                    data: {error}
                }

                return res.status(400).json(response);
            });
    }
}

module.exports = {
    uploadImage
};