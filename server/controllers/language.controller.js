const Language = require('../models/language.model');
 
module.exports.findAllLanguages = (req, res) => {
        Language.find()
        .then(allLanguages => res.json({ language: allLanguages }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleLanguage = (req, res) => {
        Language.findOne({ _id: req.params.id })
        .then(oneSingleLanguage => res.json({ language: oneSingleLanguage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewLanguage = (req, res) => {
        Language.create(req.body)
        .then(newlyCreatedLanguage => res.json({ language: newlyCreatedLanguage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingLanguage = (req, res) => {
        Language.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedLanguage => res.json({ language: updatedLanguage }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingLanguage = (req, res) => {
        Language.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}