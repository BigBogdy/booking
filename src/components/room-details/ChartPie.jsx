import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    labelBot: {
      fontWeight: 700,
      transform: 'translateY(-10px)',
      fontFamily: 'Quicksand',
      color: '#BC9CFF',
    },
    labelTop: {
      fontWeight: 700,
      fontFamily: 'Quicksand',
      color: '#BC9CFF',
    },
  };
});

const COLORS = ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090'];

const ChartPie = ({ item }) => {
  const sum =
    item.votes[0].value +
    item.votes[1].value +
    item.votes[2].value +
    item.votes[3].value;

  const styles = useStyles();
  return (
    <PieChart style={{ marginRight: 30 }} width={180} height={200}>
      <Pie
        data={item.votes}
        cx={85}
        cy={100}
        innerRadius={82}
        outerRadius={90}
        fill="#fvdf"
        paddingAngle={2}
        dataKey="value"
      >
        <Label
          style={{ fill: '#BC9CFF', fontSize: 24 }}
          value={sum}
          className={styles.labelBot}
          position="centerBottom"
        />
        <Label
          style={{ fill: '#BC9CFF', fontSize: 20 }}
          value="Votes"
          className={styles.labelTop}
          position="centerTop"
        />

        {item.votes.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ChartPie;
