import '../../styles/Admin/admin.scss';
import AddDish from './AddDish';
import Header from '../../components/Header1';

export default function Admin () {
    return (
        <div id="page-admin">
            <Header />

            <AddDish />
        </div>
    )
}