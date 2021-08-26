const LanguageController = require('../controllers/language.controller');
 
module.exports = app => {
    app.get('/api/languages', LanguageController.findAllLanguages);
    app.get('/api/languages/:id', LanguageController.findOneSingleLanguage);
    app.put('/api/languages/:id', LanguageController.updateExistingLanguage);
    app.post('/api/languages/new', LanguageController.createNewLanguage);
    app.delete('/api/languages/:id', LanguageController.deleteAnExistingLanguage);
}