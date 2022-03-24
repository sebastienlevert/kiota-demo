import {createMobileofflineprofileitemFromDiscriminatorValue} from './createMobileofflineprofileitemFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeammobileofflineprofilemembershipFromDiscriminatorValue} from './createTeammobileofflineprofilemembershipFromDiscriminatorValue';
import {createUsermobileofflineprofilemembershipFromDiscriminatorValue} from './createUsermobileofflineprofilemembershipFromDiscriminatorValue';
import {Crmbaseentity, Mobileofflineprofileitem, Organization, Systemuser, Teammobileofflineprofilemembership, Usermobileofflineprofilemembership} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mobileofflineprofile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultMobileOfflineProfile_Organization?: Organization[] | undefined;
    private _description?: string | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvalidated?: boolean | undefined;
    private _mobileOfflineProfile_MobileOfflineProfileItem?: Mobileofflineprofileitem[] | undefined;
    private _mobileOfflineProfile_SystemUser?: Systemuser[] | undefined;
    private _mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId?: Teammobileofflineprofilemembership[] | undefined;
    private _mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId?: Usermobileofflineprofilemembership[] | undefined;
    private _mobileofflineprofileid?: string | undefined;
    private _mobileofflineprofileidunique?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _processid?: string | undefined;
    private _publishedon?: Date | undefined;
    private _selectedentitymetadata?: string | undefined;
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
     * Instantiates a new mobileofflineprofile and sets the default values.
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
     * Gets the defaultMobileOfflineProfile_Organization property value. 
     * @returns a organization
     */
    public get defaultMobileOfflineProfile_Organization() {
        return this._defaultMobileOfflineProfile_Organization;
    };
    /**
     * Sets the defaultMobileOfflineProfile_Organization property value. 
     * @param value Value to set for the DefaultMobileOfflineProfile_Organization property.
     */
    public set defaultMobileOfflineProfile_Organization(value: Organization[] | undefined) {
        this._defaultMobileOfflineProfile_Organization = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Mobileofflineprofile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofile)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Mobileofflineprofile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Mobileofflineprofile)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Mobileofflineprofile).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Mobileofflineprofile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Mobileofflineprofile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultMobileOfflineProfile_Organization": (o, n) => { (o as unknown as Mobileofflineprofile).defaultMobileOfflineProfile_Organization = n.getCollectionOfObjectValues<Organization>(createOrganizationFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Mobileofflineprofile).description = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Mobileofflineprofile).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Mobileofflineprofile).ismanaged = n.getBooleanValue(); },
            "isvalidated": (o, n) => { (o as unknown as Mobileofflineprofile).isvalidated = n.getBooleanValue(); },
            "mobileOfflineProfile_MobileOfflineProfileItem": (o, n) => { (o as unknown as Mobileofflineprofile).mobileOfflineProfile_MobileOfflineProfileItem = n.getCollectionOfObjectValues<Mobileofflineprofileitem>(createMobileofflineprofileitemFromDiscriminatorValue); },
            "mobileOfflineProfile_SystemUser": (o, n) => { (o as unknown as Mobileofflineprofile).mobileOfflineProfile_SystemUser = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId": (o, n) => { (o as unknown as Mobileofflineprofile).mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId = n.getCollectionOfObjectValues<Teammobileofflineprofilemembership>(createTeammobileofflineprofilemembershipFromDiscriminatorValue); },
            "mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId": (o, n) => { (o as unknown as Mobileofflineprofile).mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId = n.getCollectionOfObjectValues<Usermobileofflineprofilemembership>(createUsermobileofflineprofilemembershipFromDiscriminatorValue); },
            "mobileofflineprofileid": (o, n) => { (o as unknown as Mobileofflineprofile).mobileofflineprofileid = n.getStringValue(); },
            "mobileofflineprofileidunique": (o, n) => { (o as unknown as Mobileofflineprofile).mobileofflineprofileidunique = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Mobileofflineprofile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Mobileofflineprofile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Mobileofflineprofile).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Mobileofflineprofile).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Mobileofflineprofile).overwritetime = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Mobileofflineprofile).processid = n.getStringValue(); },
            "publishedon": (o, n) => { (o as unknown as Mobileofflineprofile).publishedon = n.getDateValue(); },
            "selectedentitymetadata": (o, n) => { (o as unknown as Mobileofflineprofile).selectedentitymetadata = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Mobileofflineprofile).solutionid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Mobileofflineprofile).stageid = n.getStringValue(); },
            "traversedpath": (o, n) => { (o as unknown as Mobileofflineprofile).traversedpath = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Mobileofflineprofile).versionnumber = n.getNumberValue(); },
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
     * Gets the mobileOfflineProfile_MobileOfflineProfileItem property value. 
     * @returns a mobileofflineprofileitem
     */
    public get mobileOfflineProfile_MobileOfflineProfileItem() {
        return this._mobileOfflineProfile_MobileOfflineProfileItem;
    };
    /**
     * Sets the mobileOfflineProfile_MobileOfflineProfileItem property value. 
     * @param value Value to set for the MobileOfflineProfile_MobileOfflineProfileItem property.
     */
    public set mobileOfflineProfile_MobileOfflineProfileItem(value: Mobileofflineprofileitem[] | undefined) {
        this._mobileOfflineProfile_MobileOfflineProfileItem = value;
    };
    /**
     * Gets the mobileOfflineProfile_SystemUser property value. 
     * @returns a systemuser
     */
    public get mobileOfflineProfile_SystemUser() {
        return this._mobileOfflineProfile_SystemUser;
    };
    /**
     * Sets the mobileOfflineProfile_SystemUser property value. 
     * @param value Value to set for the MobileOfflineProfile_SystemUser property.
     */
    public set mobileOfflineProfile_SystemUser(value: Systemuser[] | undefined) {
        this._mobileOfflineProfile_SystemUser = value;
    };
    /**
     * Gets the mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId property value. 
     * @returns a teammobileofflineprofilemembership
     */
    public get mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId() {
        return this._mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId;
    };
    /**
     * Sets the mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId property value. 
     * @param value Value to set for the mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId property.
     */
    public set mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId(value: Teammobileofflineprofilemembership[] | undefined) {
        this._mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId = value;
    };
    /**
     * Gets the mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId property value. 
     * @returns a usermobileofflineprofilemembership
     */
    public get mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId() {
        return this._mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId;
    };
    /**
     * Sets the mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId property value. 
     * @param value Value to set for the mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId property.
     */
    public set mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId(value: Usermobileofflineprofilemembership[] | undefined) {
        this._mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId = value;
    };
    /**
     * Gets the mobileofflineprofileid property value. 
     * @returns a string
     */
    public get mobileofflineprofileid() {
        return this._mobileofflineprofileid;
    };
    /**
     * Sets the mobileofflineprofileid property value. 
     * @param value Value to set for the mobileofflineprofileid property.
     */
    public set mobileofflineprofileid(value: string | undefined) {
        this._mobileofflineprofileid = value;
    };
    /**
     * Gets the mobileofflineprofileidunique property value. 
     * @returns a string
     */
    public get mobileofflineprofileidunique() {
        return this._mobileofflineprofileidunique;
    };
    /**
     * Sets the mobileofflineprofileidunique property value. 
     * @param value Value to set for the mobileofflineprofileidunique property.
     */
    public set mobileofflineprofileidunique(value: string | undefined) {
        this._mobileofflineprofileidunique = value;
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
     * Gets the selectedentitymetadata property value. 
     * @returns a string
     */
    public get selectedentitymetadata() {
        return this._selectedentitymetadata;
    };
    /**
     * Sets the selectedentitymetadata property value. 
     * @param value Value to set for the selectedentitymetadata property.
     */
    public set selectedentitymetadata(value: string | undefined) {
        this._selectedentitymetadata = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Organization>("defaultMobileOfflineProfile_Organization", this.defaultMobileOfflineProfile_Organization);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvalidated", this.isvalidated);
        writer.writeCollectionOfObjectValues<Mobileofflineprofileitem>("mobileOfflineProfile_MobileOfflineProfileItem", this.mobileOfflineProfile_MobileOfflineProfileItem);
        writer.writeCollectionOfObjectValues<Systemuser>("mobileOfflineProfile_SystemUser", this.mobileOfflineProfile_SystemUser);
        writer.writeCollectionOfObjectValues<Teammobileofflineprofilemembership>("mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId", this.mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId);
        writer.writeCollectionOfObjectValues<Usermobileofflineprofilemembership>("mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId", this.mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId);
        writer.writeStringValue("mobileofflineprofileid", this.mobileofflineprofileid);
        writer.writeStringValue("mobileofflineprofileidunique", this.mobileofflineprofileidunique);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("processid", this.processid);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeStringValue("selectedentitymetadata", this.selectedentitymetadata);
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
