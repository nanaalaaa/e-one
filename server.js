<<<<<<< HEAD
const app = require('./src/app');

const PORT = process.env.PORT || 3055;
=======
const app = express();

const PORT = 3055;
>>>>>>> ceaeedfe9a493ae91fe2a3dcb8c662cfc8888c1f

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

<<<<<<< HEAD
// process.on('SIGINT', () => {
//     server.close(() => {
//         console.log('Server is closed');
//     });
// });
=======
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server is closed');
    });
});
>>>>>>> ceaeedfe9a493ae91fe2a3dcb8c662cfc8888c1f

