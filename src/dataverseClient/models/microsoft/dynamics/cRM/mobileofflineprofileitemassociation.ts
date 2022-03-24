import {createMobileofflineprofileitemFromDiscriminatorValue} from './createMobileofflineprofileitemFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Mobileofflineprofileitem, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mobileofflineprofileitemassociation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __mobileofflineprofileitemid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvalidated?: boolean | undefined;
    private _mobileofflineprofileitemassociationid?: string | undefined;
    private _mobileofflineprofileitemassociationidunique?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _processid?: string | undefined;
    private _profileitemassociationentityfilter?: string | undefined;
    private _publishedon?: Date | undefined;
    private _regardingobjectid?: Mobileofflineprofileitem | undefined;
    private _relationshipdata?: string | undefined;
    private _relationshipdisplayname?: string | undefined;
    private _relationshipid?: string | undefined;
    private _relationshipname?: string | undefined;
    private _selectedrelationshipsschema?: number | undefined;
    private _solutionid?: string | undefined;
    private _stageid?: string | undefined;
    private _traversedpath?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _mobileofflineprofileitemid_value property value. 
     * @returns a string
     */
    public get _mobileofflineprofileitemid_value() {
        return this.__mobileofflineprofileitemid_value;
    };
    /**
     * Sets the _mobileofflineprofileitemid_value property value. 
     * @param value Value to set for the _mobileofflineprofileitemid_value property.
     */
    public set _mobileofflineprofileitemid_value(value: string | undefined) {
        this.__mobileofflineprofileitemid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Instantiates a new mobileofflineprofileitemassociation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._createdonbehalfby_value = n.getStringValue(); },
            "_mobileofflineprofileitemid_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._mobileofflineprofileitemid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "introducedversion": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).ismanaged = n.getBooleanValue(); },
            "isvalidated": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).isvalidated = n.getBooleanValue(); },
            "mobileofflineprofileitemassociationid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).mobileofflineprofileitemassociationid = n.getStringValue(); },
            "mobileofflineprofileitemassociationidunique": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).mobileofflineprofileitemassociationidunique = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).overwritetime = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).processid = n.getStringValue(); },
            "profileitemassociationentityfilter": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).profileitemassociationentityfilter = n.getStringValue(); },
            "publishedon": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).publishedon = n.getDateValue(); },
            "regardingobjectid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).regardingobjectid = n.getObjectValue<Mobileofflineprofileitem>(createMobileofflineprofileitemFromDiscriminatorValue); },
            "relationshipdata": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).relationshipdata = n.getStringValue(); },
            "relationshipdisplayname": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).relationshipdisplayname = n.getStringValue(); },
            "relationshipid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).relationshipid = n.getStringValue(); },
            "relationshipname": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).relationshipname = n.getStringValue(); },
            "selectedrelationshipsschema": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).selectedrelationshipsschema = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).solutionid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).stageid = n.getStringValue(); },
            "traversedpath": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).traversedpath = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Mobileofflineprofileitemassociation).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the isvalidated property value. 
     * @returns a boolean
     */
    public get isvalidated() {
        return this._isvalidated;
    };
    /**
     * Sets the isvalidated property value. 
     * @param value Value to set for the isvalidated property.
     */
    public set isvalidated(value: boolean | undefined) {
        this._isvalidated = value;
    };
    /**
     * Gets the mobileofflineprofileitemassociationid property value. 
     * @returns a string
     */
    public get mobileofflineprofileitemassociationid() {
        return this._mobileofflineprofileitemassociationid;
    };
    /**
     * Sets the mobileofflineprofileitemassociationid property value. 
     * @param value Value to set for the mobileofflineprofileitemassociationid property.
     */
    public set mobileofflineprofileitemassociationid(value: string | undefined) {
        this._mobileofflineprofileitemassociationid = value;
    };
    /**
     * Gets the mobileofflineprofileitemassociationidunique property value. 
     * @returns a string
     */
    public get mobileofflineprofileitemassociationidunique() {
        return this._mobileofflineprofileitemassociationidunique;
    };
    /**
     * Sets the mobileofflineprofileitemassociationidunique property value. 
     * @param value Value to set for the mobileofflineprofileitemassociationidunique property.
     */
    public set mobileofflineprofileitemassociationidunique(value: string | undefined) {
        this._mobileofflineprofileitemassociationidunique = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Gets the profileitemassociationentityfilter property value. 
     * @returns a string
     */
    public get profileitemassociationentityfilter() {
        return this._profileitemassociationentityfilter;
    };
    /**
     * Sets the profileitemassociationentityfilter property value. 
     * @param value Value to set for the profileitemassociationentityfilter property.
     */
    public set profileitemassociationentityfilter(value: string | undefined) {
        this._profileitemassociationentityfilter = value;
    };
    /**
     * Gets the publishedon property value. 
     * @returns a Date
     */
    public get publishedon() {
        return this._publishedon;
    };
    /**
     * Sets the publishedon property value. 
     * @param value Value to set for the publishedon property.
     */
    public set publishedon(value: Date | undefined) {
        this._publishedon = value;
    };
    /**
     * Gets the regardingobjectid property value. 
     * @returns a mobileofflineprofileitem
     */
    public get regardingobjectid() {
        return this._regardingobjectid;
    };
    /**
     * Sets the regardingobjectid property value. 
     * @param value Value to set for the regardingobjectid property.
     */
    public set regardingobjectid(value: Mobileofflineprofileitem | undefined) {
        this._regardingobjectid = value;
    };
    /**
     * Gets the relationshipdata property value. 
     * @returns a string
     */
    public get relationshipdata() {
        return this._relationshipdata;
    };
    /**
     * Sets the relationshipdata property value. 
     * @param value Value to set for the relationshipdata property.
     */
    public set relationshipdata(value: string | undefined) {
        this._relationshipdata = value;
    };
    /**
     * Gets the relationshipdisplayname property value. 
     * @returns a string
     */
    public get relationshipdisplayname() {
        return this._relationshipdisplayname;
    };
    /**
     * Sets the relationshipdisplayname property value. 
     * @param value Value to set for the relationshipdisplayname property.
     */
    public set relationshipdisplayname(value: string | undefined) {
        this._relationshipdisplayname = value;
    };
    /**
     * Gets the relationshipid property value. 
     * @returns a string
     */
    public get relationshipid() {
        return this._relationshipid;
    };
    /**
     * Sets the relationshipid property value. 
     * @param value Value to set for the relationshipid property.
     */
    public set relationshipid(value: string | undefined) {
        this._relationshipid = value;
    };
    /**
     * Gets the relationshipname property value. 
     * @returns a string
     */
    public get relationshipname() {
        return this._relationshipname;
    };
    /**
     * Sets the relationshipname property value. 
     * @param value Value to set for the relationshipname property.
     */
    public set relationshipname(value: string | undefined) {
        this._relationshipname = value;
    };
    /**
     * Gets the selectedrelationshipsschema property value. 
     * @returns a integer
     */
    public get selectedrelationshipsschema() {
        return this._selectedrelationshipsschema;
    };
    /**
     * Sets the selectedrelationshipsschema property value. 
     * @param value Value to set for the selectedrelationshipsschema property.
     */
    public set selectedrelationshipsschema(value: number | undefined) {
        this._selectedrelationshipsschema = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_mobileofflineprofileitemid_value", this._mobileofflineprofileitemid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvalidated", this.isvalidated);
        writer.writeStringValue("mobileofflineprofileitemassociationid", this.mobileofflineprofileitemassociationid);
        writer.writeStringValue("mobileofflineprofileitemassociationidunique", this.mobileofflineprofileitemassociationidunique);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("profileitemassociationentityfilter", this.profileitemassociationentityfilter);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeObjectValue<Mobileofflineprofileitem>("regardingobjectid", this.regardingobjectid);
        writer.writeStringValue("relationshipdata", this.relationshipdata);
        writer.writeStringValue("relationshipdisplayname", this.relationshipdisplayname);
        writer.writeStringValue("relationshipid", this.relationshipid);
        writer.writeStringValue("relationshipname", this.relationshipname);
        writer.writeNumberValue("selectedrelationshipsschema", this.selectedrelationshipsschema);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
}
