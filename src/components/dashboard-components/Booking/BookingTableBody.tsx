import { IBooking } from '@/app/models/Bookings/bookings.model';
import { deleteConfirmModal } from '@/components/common/deleteConfirmModal';
import { gql, useMutation } from '@apollo/client';
import { Badge, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface IBookingTableBodyProps {
	booking: IBooking;
	refetchBooking: () => void;
}
const BookingTableBody: React.FC<IBookingTableBodyProps> = ({
	booking,
	refetchBooking,
}) => {
	// delete booking
	const [deleteBooking, { loading: deletingBooking }] = useMutation(
		DELETE_BOOKING_MUTATION,
		{
			onCompleted: () => {
				refetchBooking();
				showNotification({
					title: 'Booking successfully deleted!',
					color: 'red',
					icon: <FiTrash size={20} />,
					message: '',
				});
			},
		}
	);
	return (
		<tr>
			<td className='text-dimmed'>{booking.name}</td>
			<td className='text-dimmed'>{booking.email}</td>
			<td className='text-dimmed'>{booking.phone}</td>
			<td className='text-dimmed'>{new Date().toDateString()}</td>

			<td className='text-dimmed'>
				<Badge color='yellow' size='md' variant='filled' radius='sm'>
					{booking?.status}
				</Badge>
			</td>
			<td className='text-dimmed'>
				<Button size='xs' color='violet' variant='filled' compact>
					Track Pack
				</Button>
			</td>

			<td className='flex gap-2 items-center'>
				<Button variant='filled' color='teal' size='xs' compact>
					<FiEdit size={16} />
				</Button>
				<Button
					loading={deletingBooking}
					variant='filled'
					color='red'
					size='xs'
					compact
					onClick={() => deleteConfirmModal(deleteBooking, booking?._id!)}
				>
					<FiTrash size={16} />
				</Button>
			</td>
		</tr>
	);
};

export default BookingTableBody;

const DELETE_BOOKING_MUTATION = gql`
	mutation DELETE_BOOKING_MUTATION($bookingId: String!) {
		removeBooking(input: { key: "_id", operator: eq, value: $bookingId })
	}
`;
