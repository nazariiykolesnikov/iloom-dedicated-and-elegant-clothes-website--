import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Breadcrumbs.css';

const Breadcrumbs = ({ items }) => {
    return (
        <section className="breadcrumbs absolute top-[70px] left-[10px]]">
            {items.map((item, index) => (
                <span
                    key={index}
                    className="crumb"
                >
                    {index !== 0
                        && <FaChevronRight
                                className="separator"
                            />
                    }
                    {item.to
                        ? (
                        <Link
                            to={item.to}
                            className="crumb-link"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="crumb-current">
                            {item.label}
                        </span>
                    )}
                </span>
            ))}
        </section>
    );
};

export default Breadcrumbs;