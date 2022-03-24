import {Annotation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnnotationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Annotation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Annotation();
}
