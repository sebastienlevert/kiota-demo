import {createAppactionFromDiscriminatorValue} from './createAppactionFromDiscriminatorValue';
import {createCatalogassignmentFromDiscriminatorValue} from './createCatalogassignmentFromDiscriminatorValue';
import {createEntityanalyticsconfigFromDiscriminatorValue} from './createEntityanalyticsconfigFromDiscriminatorValue';
import {createMsdyn_contactsuggestionrulesetFromDiscriminatorValue} from './createMsdyn_contactsuggestionrulesetFromDiscriminatorValue';
import {createMsdyn_entitylinkchatconfigurationFromDiscriminatorValue} from './createMsdyn_entitylinkchatconfigurationFromDiscriminatorValue';
import {createPrivilegesremovalsettingFromDiscriminatorValue} from './createPrivilegesremovalsettingFromDiscriminatorValue';
import {createServiceplanmappingFromDiscriminatorValue} from './createServiceplanmappingFromDiscriminatorValue';
import {createSolutioncomponentbatchconfigurationFromDiscriminatorValue} from './createSolutioncomponentbatchconfigurationFromDiscriminatorValue';
import {createSolutioncomponentconfigurationFromDiscriminatorValue} from './createSolutioncomponentconfigurationFromDiscriminatorValue';
import {createVirtualentitymetadataFromDiscriminatorValue} from './createVirtualentitymetadataFromDiscriminatorValue';
import {Appaction, Catalogassignment, Crmbaseentity, Entityanalyticsconfig, Msdyn_contactsuggestionruleset, Msdyn_entitylinkchatconfiguration, Privilegesremovalsetting, Serviceplanmapping, Solutioncomponentbatchconfiguration, Solutioncomponentconfiguration, Virtualentitymetadata} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entity extends Crmbaseentity implements Parsable {
    private _addresstablename?: string | undefined;
    private _basetablename?: string | undefined;
    private _catalogAssignments?: Catalogassignment[] | undefined;
    private _collectionname?: string | undefined;
    private _componentstate?: number | undefined;
    private _entity_appaction_ContextEntity?: Appaction[] | undefined;
    private _entity_entityanalyticsconfig?: Entityanalyticsconfig[] | undefined;
    private _entity_serviceplanmapping?: Serviceplanmapping[] | undefined;
    private _entity_solutioncomponentbatchconfiguration_PrimaryEntity?: Solutioncomponentbatchconfiguration[] | undefined;
    private _entity_solutioncomponentbatchconfiguration_RelatedEntity?: Solutioncomponentbatchconfiguration[] | undefined;
    private _entity_solutioncomponentconfiguration?: Solutioncomponentconfiguration[] | undefined;
    private _entityid?: string | undefined;
    private _entitysetname?: string | undefined;
    private _extensiontablename?: string | undefined;
    private _externalcollectionname?: string | undefined;
    private _externalname?: string | undefined;
    private _logicalcollectionname?: string | undefined;
    private _logicalname?: string | undefined;
    private _msdyn_entity_msdyn_contactsuggestionruleset_entitytype?: Msdyn_contactsuggestionruleset[] | undefined;
    private _msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype?: Msdyn_entitylinkchatconfiguration[] | undefined;
    private _name?: string | undefined;
    private _originallocalizedcollectionname?: string | undefined;
    private _originallocalizedname?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _parentcontrollingattributename?: string | undefined;
    private _physicalname?: string | undefined;
    private _privilegesremovalsetting_extensionofrecordid?: Privilegesremovalsetting[] | undefined;
    private _reportviewname?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    private _virtualentitymetadata_extensionofrecordid?: Virtualentitymetadata[] | undefined;
    /**
     * Gets the addresstablename property value. 
     * @returns a string
     */
    public get addresstablename() {
        return this._addresstablename;
    };
    /**
     * Sets the addresstablename property value. 
     * @param value Value to set for the addresstablename property.
     */
    public set addresstablename(value: string | undefined) {
        this._addresstablename = value;
    };
    /**
     * Gets the basetablename property value. 
     * @returns a string
     */
    public get basetablename() {
        return this._basetablename;
    };
    /**
     * Sets the basetablename property value. 
     * @param value Value to set for the basetablename property.
     */
    public set basetablename(value: string | undefined) {
        this._basetablename = value;
    };
    /**
     * Gets the catalogAssignments property value. 
     * @returns a catalogassignment
     */
    public get catalogAssignments() {
        return this._catalogAssignments;
    };
    /**
     * Sets the catalogAssignments property value. 
     * @param value Value to set for the CatalogAssignments property.
     */
    public set catalogAssignments(value: Catalogassignment[] | undefined) {
        this._catalogAssignments = value;
    };
    /**
     * Gets the collectionname property value. 
     * @returns a string
     */
    public get collectionname() {
        return this._collectionname;
    };
    /**
     * Sets the collectionname property value. 
     * @param value Value to set for the collectionname property.
     */
    public set collectionname(value: string | undefined) {
        this._collectionname = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new entity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entity_appaction_ContextEntity property value. 
     * @returns a appaction
     */
    public get entity_appaction_ContextEntity() {
        return this._entity_appaction_ContextEntity;
    };
    /**
     * Sets the entity_appaction_ContextEntity property value. 
     * @param value Value to set for the entity_appaction_ContextEntity property.
     */
    public set entity_appaction_ContextEntity(value: Appaction[] | undefined) {
        this._entity_appaction_ContextEntity = value;
    };
    /**
     * Gets the entity_entityanalyticsconfig property value. 
     * @returns a entityanalyticsconfig
     */
    public get entity_entityanalyticsconfig() {
        return this._entity_entityanalyticsconfig;
    };
    /**
     * Sets the entity_entityanalyticsconfig property value. 
     * @param value Value to set for the entity_entityanalyticsconfig property.
     */
    public set entity_entityanalyticsconfig(value: Entityanalyticsconfig[] | undefined) {
        this._entity_entityanalyticsconfig = value;
    };
    /**
     * Gets the entity_serviceplanmapping property value. 
     * @returns a serviceplanmapping
     */
    public get entity_serviceplanmapping() {
        return this._entity_serviceplanmapping;
    };
    /**
     * Sets the entity_serviceplanmapping property value. 
     * @param value Value to set for the entity_serviceplanmapping property.
     */
    public set entity_serviceplanmapping(value: Serviceplanmapping[] | undefined) {
        this._entity_serviceplanmapping = value;
    };
    /**
     * Gets the entity_solutioncomponentbatchconfiguration_PrimaryEntity property value. 
     * @returns a solutioncomponentbatchconfiguration
     */
    public get entity_solutioncomponentbatchconfiguration_PrimaryEntity() {
        return this._entity_solutioncomponentbatchconfiguration_PrimaryEntity;
    };
    /**
     * Sets the entity_solutioncomponentbatchconfiguration_PrimaryEntity property value. 
     * @param value Value to set for the entity_solutioncomponentbatchconfiguration_PrimaryEntity property.
     */
    public set entity_solutioncomponentbatchconfiguration_PrimaryEntity(value: Solutioncomponentbatchconfiguration[] | undefined) {
        this._entity_solutioncomponentbatchconfiguration_PrimaryEntity = value;
    };
    /**
     * Gets the entity_solutioncomponentbatchconfiguration_RelatedEntity property value. 
     * @returns a solutioncomponentbatchconfiguration
     */
    public get entity_solutioncomponentbatchconfiguration_RelatedEntity() {
        return this._entity_solutioncomponentbatchconfiguration_RelatedEntity;
    };
    /**
     * Sets the entity_solutioncomponentbatchconfiguration_RelatedEntity property value. 
     * @param value Value to set for the entity_solutioncomponentbatchconfiguration_RelatedEntity property.
     */
    public set entity_solutioncomponentbatchconfiguration_RelatedEntity(value: Solutioncomponentbatchconfiguration[] | undefined) {
        this._entity_solutioncomponentbatchconfiguration_RelatedEntity = value;
    };
    /**
     * Gets the entity_solutioncomponentconfiguration property value. 
     * @returns a solutioncomponentconfiguration
     */
    public get entity_solutioncomponentconfiguration() {
        return this._entity_solutioncomponentconfiguration;
    };
    /**
     * Sets the entity_solutioncomponentconfiguration property value. 
     * @param value Value to set for the entity_solutioncomponentconfiguration property.
     */
    public set entity_solutioncomponentconfiguration(value: Solutioncomponentconfiguration[] | undefined) {
        this._entity_solutioncomponentconfiguration = value;
    };
    /**
     * Gets the entityid property value. 
     * @returns a string
     */
    public get entityid() {
        return this._entityid;
    };
    /**
     * Sets the entityid property value. 
     * @param value Value to set for the entityid property.
     */
    public set entityid(value: string | undefined) {
        this._entityid = value;
    };
    /**
     * Gets the entitysetname property value. 
     * @returns a string
     */
    public get entitysetname() {
        return this._entitysetname;
    };
    /**
     * Sets the entitysetname property value. 
     * @param value Value to set for the entitysetname property.
     */
    public set entitysetname(value: string | undefined) {
        this._entitysetname = value;
    };
    /**
     * Gets the extensiontablename property value. 
     * @returns a string
     */
    public get extensiontablename() {
        return this._extensiontablename;
    };
    /**
     * Sets the extensiontablename property value. 
     * @param value Value to set for the extensiontablename property.
     */
    public set extensiontablename(value: string | undefined) {
        this._extensiontablename = value;
    };
    /**
     * Gets the externalcollectionname property value. 
     * @returns a string
     */
    public get externalcollectionname() {
        return this._externalcollectionname;
    };
    /**
     * Sets the externalcollectionname property value. 
     * @param value Value to set for the externalcollectionname property.
     */
    public set externalcollectionname(value: string | undefined) {
        this._externalcollectionname = value;
    };
    /**
     * Gets the externalname property value. 
     * @returns a string
     */
    public get externalname() {
        return this._externalname;
    };
    /**
     * Sets the externalname property value. 
     * @param value Value to set for the externalname property.
     */
    public set externalname(value: string | undefined) {
        this._externalname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "addresstablename": (o, n) => { (o as unknown as Entity).addresstablename = n.getStringValue(); },
            "basetablename": (o, n) => { (o as unknown as Entity).basetablename = n.getStringValue(); },
            "catalogAssignments": (o, n) => { (o as unknown as Entity).catalogAssignments = n.getCollectionOfObjectValues<Catalogassignment>(createCatalogassignmentFromDiscriminatorValue); },
            "collectionname": (o, n) => { (o as unknown as Entity).collectionname = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Entity).componentstate = n.getNumberValue(); },
            "entity_appaction_ContextEntity": (o, n) => { (o as unknown as Entity).entity_appaction_ContextEntity = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "entity_entityanalyticsconfig": (o, n) => { (o as unknown as Entity).entity_entityanalyticsconfig = n.getCollectionOfObjectValues<Entityanalyticsconfig>(createEntityanalyticsconfigFromDiscriminatorValue); },
            "entity_serviceplanmapping": (o, n) => { (o as unknown as Entity).entity_serviceplanmapping = n.getCollectionOfObjectValues<Serviceplanmapping>(createServiceplanmappingFromDiscriminatorValue); },
            "entity_solutioncomponentbatchconfiguration_PrimaryEntity": (o, n) => { (o as unknown as Entity).entity_solutioncomponentbatchconfiguration_PrimaryEntity = n.getCollectionOfObjectValues<Solutioncomponentbatchconfiguration>(createSolutioncomponentbatchconfigurationFromDiscriminatorValue); },
            "entity_solutioncomponentbatchconfiguration_RelatedEntity": (o, n) => { (o as unknown as Entity).entity_solutioncomponentbatchconfiguration_RelatedEntity = n.getCollectionOfObjectValues<Solutioncomponentbatchconfiguration>(createSolutioncomponentbatchconfigurationFromDiscriminatorValue); },
            "entity_solutioncomponentconfiguration": (o, n) => { (o as unknown as Entity).entity_solutioncomponentconfiguration = n.getCollectionOfObjectValues<Solutioncomponentconfiguration>(createSolutioncomponentconfigurationFromDiscriminatorValue); },
            "entityid": (o, n) => { (o as unknown as Entity).entityid = n.getStringValue(); },
            "entitysetname": (o, n) => { (o as unknown as Entity).entitysetname = n.getStringValue(); },
            "extensiontablename": (o, n) => { (o as unknown as Entity).extensiontablename = n.getStringValue(); },
            "externalcollectionname": (o, n) => { (o as unknown as Entity).externalcollectionname = n.getStringValue(); },
            "externalname": (o, n) => { (o as unknown as Entity).externalname = n.getStringValue(); },
            "logicalcollectionname": (o, n) => { (o as unknown as Entity).logicalcollectionname = n.getStringValue(); },
            "logicalname": (o, n) => { (o as unknown as Entity).logicalname = n.getStringValue(); },
            "msdyn_entity_msdyn_contactsuggestionruleset_entitytype": (o, n) => { (o as unknown as Entity).msdyn_entity_msdyn_contactsuggestionruleset_entitytype = n.getCollectionOfObjectValues<Msdyn_contactsuggestionruleset>(createMsdyn_contactsuggestionrulesetFromDiscriminatorValue); },
            "msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype": (o, n) => { (o as unknown as Entity).msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype = n.getCollectionOfObjectValues<Msdyn_entitylinkchatconfiguration>(createMsdyn_entitylinkchatconfigurationFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Entity).name = n.getStringValue(); },
            "originallocalizedcollectionname": (o, n) => { (o as unknown as Entity).originallocalizedcollectionname = n.getStringValue(); },
            "originallocalizedname": (o, n) => { (o as unknown as Entity).originallocalizedname = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Entity).overwritetime = n.getDateValue(); },
            "parentcontrollingattributename": (o, n) => { (o as unknown as Entity).parentcontrollingattributename = n.getStringValue(); },
            "physicalname": (o, n) => { (o as unknown as Entity).physicalname = n.getStringValue(); },
            "privilegesremovalsetting_extensionofrecordid": (o, n) => { (o as unknown as Entity).privilegesremovalsetting_extensionofrecordid = n.getCollectionOfObjectValues<Privilegesremovalsetting>(createPrivilegesremovalsettingFromDiscriminatorValue); },
            "reportviewname": (o, n) => { (o as unknown as Entity).reportviewname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Entity).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entity).versionnumber = n.getNumberValue(); },
            "virtualentitymetadata_extensionofrecordid": (o, n) => { (o as unknown as Entity).virtualentitymetadata_extensionofrecordid = n.getCollectionOfObjectValues<Virtualentitymetadata>(createVirtualentitymetadataFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the logicalcollectionname property value. 
     * @returns a string
     */
    public get logicalcollectionname() {
        return this._logicalcollectionname;
    };
    /**
     * Sets the logicalcollectionname property value. 
     * @param value Value to set for the logicalcollectionname property.
     */
    public set logicalcollectionname(value: string | undefined) {
        this._logicalcollectionname = value;
    };
    /**
     * Gets the logicalname property value. 
     * @returns a string
     */
    public get logicalname() {
        return this._logicalname;
    };
    /**
     * Sets the logicalname property value. 
     * @param value Value to set for the logicalname property.
     */
    public set logicalname(value: string | undefined) {
        this._logicalname = value;
    };
    /**
     * Gets the msdyn_entity_msdyn_contactsuggestionruleset_entitytype property value. 
     * @returns a msdyn_contactsuggestionruleset
     */
    public get msdyn_entity_msdyn_contactsuggestionruleset_entitytype() {
        return this._msdyn_entity_msdyn_contactsuggestionruleset_entitytype;
    };
    /**
     * Sets the msdyn_entity_msdyn_contactsuggestionruleset_entitytype property value. 
     * @param value Value to set for the msdyn_entity_msdyn_contactsuggestionruleset_entitytype property.
     */
    public set msdyn_entity_msdyn_contactsuggestionruleset_entitytype(value: Msdyn_contactsuggestionruleset[] | undefined) {
        this._msdyn_entity_msdyn_contactsuggestionruleset_entitytype = value;
    };
    /**
     * Gets the msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype property value. 
     * @returns a msdyn_entitylinkchatconfiguration
     */
    public get msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype() {
        return this._msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype;
    };
    /**
     * Sets the msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype property value. 
     * @param value Value to set for the msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype property.
     */
    public set msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype(value: Msdyn_entitylinkchatconfiguration[] | undefined) {
        this._msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the originallocalizedcollectionname property value. 
     * @returns a string
     */
    public get originallocalizedcollectionname() {
        return this._originallocalizedcollectionname;
    };
    /**
     * Sets the originallocalizedcollectionname property value. 
     * @param value Value to set for the originallocalizedcollectionname property.
     */
    public set originallocalizedcollectionname(value: string | undefined) {
        this._originallocalizedcollectionname = value;
    };
    /**
     * Gets the originallocalizedname property value. 
     * @returns a string
     */
    public get originallocalizedname() {
        return this._originallocalizedname;
    };
    /**
     * Sets the originallocalizedname property value. 
     * @param value Value to set for the originallocalizedname property.
     */
    public set originallocalizedname(value: string | undefined) {
        this._originallocalizedname = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the parentcontrollingattributename property value. 
     * @returns a string
     */
    public get parentcontrollingattributename() {
        return this._parentcontrollingattributename;
    };
    /**
     * Sets the parentcontrollingattributename property value. 
     * @param value Value to set for the parentcontrollingattributename property.
     */
    public set parentcontrollingattributename(value: string | undefined) {
        this._parentcontrollingattributename = value;
    };
    /**
     * Gets the physicalname property value. 
     * @returns a string
     */
    public get physicalname() {
        return this._physicalname;
    };
    /**
     * Sets the physicalname property value. 
     * @param value Value to set for the physicalname property.
     */
    public set physicalname(value: string | undefined) {
        this._physicalname = value;
    };
    /**
     * Gets the privilegesremovalsetting_extensionofrecordid property value. 
     * @returns a privilegesremovalsetting
     */
    public get privilegesremovalsetting_extensionofrecordid() {
        return this._privilegesremovalsetting_extensionofrecordid;
    };
    /**
     * Sets the privilegesremovalsetting_extensionofrecordid property value. 
     * @param value Value to set for the privilegesremovalsetting_extensionofrecordid property.
     */
    public set privilegesremovalsetting_extensionofrecordid(value: Privilegesremovalsetting[] | undefined) {
        this._privilegesremovalsetting_extensionofrecordid = value;
    };
    /**
     * Gets the reportviewname property value. 
     * @returns a string
     */
    public get reportviewname() {
        return this._reportviewname;
    };
    /**
     * Sets the reportviewname property value. 
     * @param value Value to set for the reportviewname property.
     */
    public set reportviewname(value: string | undefined) {
        this._reportviewname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("addresstablename", this.addresstablename);
        writer.writeStringValue("basetablename", this.basetablename);
        writer.writeCollectionOfObjectValues<Catalogassignment>("catalogAssignments", this.catalogAssignments);
        writer.writeStringValue("collectionname", this.collectionname);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Appaction>("entity_appaction_ContextEntity", this.entity_appaction_ContextEntity);
        writer.writeCollectionOfObjectValues<Entityanalyticsconfig>("entity_entityanalyticsconfig", this.entity_entityanalyticsconfig);
        writer.writeCollectionOfObjectValues<Serviceplanmapping>("entity_serviceplanmapping", this.entity_serviceplanmapping);
        writer.writeCollectionOfObjectValues<Solutioncomponentbatchconfiguration>("entity_solutioncomponentbatchconfiguration_PrimaryEntity", this.entity_solutioncomponentbatchconfiguration_PrimaryEntity);
        writer.writeCollectionOfObjectValues<Solutioncomponentbatchconfiguration>("entity_solutioncomponentbatchconfiguration_RelatedEntity", this.entity_solutioncomponentbatchconfiguration_RelatedEntity);
        writer.writeCollectionOfObjectValues<Solutioncomponentconfiguration>("entity_solutioncomponentconfiguration", this.entity_solutioncomponentconfiguration);
        writer.writeStringValue("entityid", this.entityid);
        writer.writeStringValue("entitysetname", this.entitysetname);
        writer.writeStringValue("extensiontablename", this.extensiontablename);
        writer.writeStringValue("externalcollectionname", this.externalcollectionname);
        writer.writeStringValue("externalname", this.externalname);
        writer.writeStringValue("logicalcollectionname", this.logicalcollectionname);
        writer.writeStringValue("logicalname", this.logicalname);
        writer.writeCollectionOfObjectValues<Msdyn_contactsuggestionruleset>("msdyn_entity_msdyn_contactsuggestionruleset_entitytype", this.msdyn_entity_msdyn_contactsuggestionruleset_entitytype);
        writer.writeCollectionOfObjectValues<Msdyn_entitylinkchatconfiguration>("msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype", this.msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("originallocalizedcollectionname", this.originallocalizedcollectionname);
        writer.writeStringValue("originallocalizedname", this.originallocalizedname);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("parentcontrollingattributename", this.parentcontrollingattributename);
        writer.writeStringValue("physicalname", this.physicalname);
        writer.writeCollectionOfObjectValues<Privilegesremovalsetting>("privilegesremovalsetting_extensionofrecordid", this.privilegesremovalsetting_extensionofrecordid);
        writer.writeStringValue("reportviewname", this.reportviewname);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Virtualentitymetadata>("virtualentitymetadata_extensionofrecordid", this.virtualentitymetadata_extensionofrecordid);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the virtualentitymetadata_extensionofrecordid property value. 
     * @returns a virtualentitymetadata
     */
    public get virtualentitymetadata_extensionofrecordid() {
        return this._virtualentitymetadata_extensionofrecordid;
    };
    /**
     * Sets the virtualentitymetadata_extensionofrecordid property value. 
     * @param value Value to set for the virtualentitymetadata_extensionofrecordid property.
     */
    public set virtualentitymetadata_extensionofrecordid(value: Virtualentitymetadata[] | undefined) {
        this._virtualentitymetadata_extensionofrecordid = value;
    };
}
