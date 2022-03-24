import {Knowledgearticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKnowledgearticleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Knowledgearticle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Knowledgearticle();
}
