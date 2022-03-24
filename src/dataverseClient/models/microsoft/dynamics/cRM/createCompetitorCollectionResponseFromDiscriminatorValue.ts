import {CompetitorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCompetitorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CompetitorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CompetitorCollectionResponse();
}
