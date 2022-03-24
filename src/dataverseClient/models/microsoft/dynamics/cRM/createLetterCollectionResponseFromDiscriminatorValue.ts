import {LetterCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLetterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LetterCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LetterCollectionResponse();
}
