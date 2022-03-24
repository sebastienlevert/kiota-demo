import {AnnotationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnnotationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnnotationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnnotationCollectionResponse();
}
