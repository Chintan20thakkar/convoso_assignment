const util = require('util');

class DeleteAPI{

    deleting_numbers_through_api(searchapimethod, searchapiurl, searchapibody, contentype, deleteapimethod, deleteapiurl) {
        var textArray = new Array();
        var count;
        cy.request({
            method: searchapimethod,
            url: searchapiurl,
            body: searchapibody,
            headers: {
                'Content-Type': contentype
            }
        }).then((response) => {

            expect(response.status).to.eq(200);
            count = response.body.data.results.length;
            for (var i = 0; i < count; i++) {
                textArray.push(response.body.data.results[i].id);
                cy.log("ID: " + response.body.data.results[i].id);
                cy.request({
                    method: deleteapimethod,
                    url: util.format(deleteapiurl, textArray[i], textArray[i]),
                    body: "id=" + textArray[i],
                    headers: {
                        'Content-Type': contentype
                    }

                }).then((response1) => {
                    expect(response1.status).to.eq(200);
                    cy.wait(1000);

                })

            }

        })

    }

}

export default DeleteAPI;