import {Knowledgearticleviews} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKnowledgearticleviewsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Knowledgearticleviews {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Knowledgearticleviews();
}
