import {Kbarticletemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKbarticletemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Kbarticletemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Kbarticletemplate();
}
