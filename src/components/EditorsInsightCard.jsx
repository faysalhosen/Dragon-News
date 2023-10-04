import { format } from "date-fns";
import PropTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";

const EditorsInsightCard = ({news}) => {
  const {thumbnail_url, title, author} = news;

  return (
    <div>
      <img className="w-full aspect-[4/3] object-cover object-top rounded-xl mb-3" src={thumbnail_url} alt='Thumbnail' />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        <AiOutlineCalendar className="text-2xl" />
        <span>{format(new Date(author.published_date.split(' ')[0]), "MMM d, yyyy")}</span>
      </div>
    </div>
  );
};

export default EditorsInsightCard;

EditorsInsightCard.propTypes = {
  news: PropTypes.object
}