import {Kbarticle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKbarticleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Kbarticle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Kbarticle();
}
