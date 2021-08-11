import React, { Component } from "react";
import { Row, Col, Card, Carousel } from 'antd';
import '../pages/Articles.css';
import { Content } from "antd/lib/layout/layout";

const style = { background: '#0092ff', padding: '8px 0' };
const { Meta } = Card;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class Articles extends React.Component {

    render() {
      return (
        <>
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <Content style={{ padding: '50px 100px 50px 100px' }}>
            <h1>Articles</h1>
            <Row gutter={[16, 10]}>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://previews.123rf.com/images/instaphotos/instaphotos2011/instaphotos201100117/159514871-male-doctor-hand-wears-glove-holding-syringe-and-vial-with-covid-19-vaccine-.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://previews.123rf.com/images/designer491/designer4912003/designer491200300082/142579751-social-distancing-concept-infected-covid19-coronavirus-figure-and-other-.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://media1.thehungryjpeg.com/thumbs2/800_3990359_ucwelk4ei0cv34v57bv93szen2d4vfhnzrkqwfom_cute-and-quirky-font-bundle.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://media1.thehungryjpeg.com/thumbs_freebies2/800_3523758_79wm0h910ivqfbw0e91t948vp2yive6ow6rifi05_free-floral-hot-air-balloon-clipart-set.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://media1.thehungryjpeg.com/thumbs2/800_3990359_1pk8zs8au02auljz4u61k0p7izttxy3aygc07oam_cute-and-quirky-font-bundle.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://media1.thehungryjpeg.com/thumbs_freebies2/800_3523772_apvue84yax0apl2gadd6hkuzl1owej7ucsly5o4n_free-mint-gold-loose-floral-digital-paper-pack.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://previews.123rf.com/images/kadmy/kadmy2004/kadmy200400002/144120042-man-in-mask-and-protective-gloves-buying-food-in-shop-at-coronavirus-epidemic.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://previews.123rf.com/images/cetkauskas/cetkauskas2003/cetkauskas200300232/142839279-abstract-virus-strain-model-heart-and-stethoscope-on-red-background-corona-virus-quarantine-virus-pa.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://previews.123rf.com/images/ljovkovski/ljovkovski2004/ljovkovski200400088/144832311-covid-19-corona-virus-or-novel-coronavirus-epidemic-disease-with-doctor-or-lab-technician-scientist-.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card
                    hoverable
                    cover={<img alt="example" 
                    src="https://media1.thehungryjpeg.com/thumbs2/800_3988747_0yk6tl40jctidtfi1z6pmjq62zkys55hlp0davic_halloween-fine-art-collection-sublimation-designs.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
        </Content>
        </>
      );
    }
  }
  
export default Articles;