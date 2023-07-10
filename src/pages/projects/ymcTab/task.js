import Link from 'next/link';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import styles from "./index.module.css"

const Container = styled.div`
  
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <li
                            className={styles.grid_item_duration}
                            key={this.props.task.id}

                        >
                            <Link href={this.props.task.href} target="_blank">
                                <div>
                                    <img src={this.props.task.icon} />
                                </div>
                                <p>{this.props.task.title}</p>
                            </Link>

                        </li>
                    </Container>
                )}
            </Draggable>
        );
    }
}