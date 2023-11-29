

const AssigenToursRow = ({ assigned }) => {
    const { clientName, GuideName, images, date, package_name, price } = assigned
    return (

        <tr>
            <th>
                <div className="avatar">
                    <div className="mask  w-12 h-12">
                        <img src={images} alt="" />
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{clientName}</div>

                    </div>
                </div>
            </td>
            <td>
                {package_name}
            </td>
            <td>
                {GuideName}
            </td>
            <td>
                {date}
            </td>
            <td>{price}</td>
            <th>
                <div>
                    <select id="dropdown" className="btn bg-green-400">
                        <option value="Option 1"> Reject</option>
                        <option value="Option 2"> Accept</option>
                        
                    </select>
                </div>
            </th>
        </tr>

    );
};

export default AssigenToursRow;