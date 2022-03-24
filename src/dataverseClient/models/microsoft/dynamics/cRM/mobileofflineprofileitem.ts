import {createMobileofflineprofileFromDiscriminatorValue} from './createMobileofflineprofileFromDiscriminatorValue';
import {createMobileofflineprofileitemassociationFromDiscriminatorValue} from './createMobileofflineprofileitemassociationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSavedqueryFromDiscriminatorValue} from './createSavedqueryFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Mobileofflineprofile, Mobileofflineprofileitemassociation, Organization, Savedquery, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mobileofflineprofileitem extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityobjecttypecode?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvalidated?: boolean | undefined;
    private _isvisibleingrid?: boolean | undefined;
    private _mobileOfflineProfileItem_MobileOfflineProfileItemAssociation?: Mobileofflineprofileitemassociation[] | undefined;
    private _mobileofflineprofileitemid?: string | undefined;
    private _mobileofflineprofileitemidunique?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _processid?: string | undefined;
    private _profileitementityfilter?: string | undefined;
    private _profileitemrule?: Savedquery | undefined;
    private _publishedon?: Date | undefined;
    private _recorddistributioncriteria?: number | undefined;
    private _recordsownedbyme?: boolean | undefined;
    private _recordsownedbymybusinessunit?: boolean | undefined;
    private _recordsownedbymyteam?: boolean | undefined;
    private _regardingobjectid?: Mobileofflineprofile | undefined;
    private _relationshipdata?: string | undefined;
    private _selectedentitymetadata?: string | undefined;
    private _selectedentitytypecode?: string | undefined;
    private _solutionid?: string | undefined;
    private _stageid?: string | undefined;
    private _syncintervalinminutes?: number | undefined;
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
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
     * Instantiates a new mobileofflineprofileitem and sets the default values.
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
     * Gets the entityobjecttypecode property value. 
     * @returns a integer
     */
    public get entityobjecttypecode() {
        return this._entityobjecttypecode;
    };
    /**
     * Sets the entityobjecttypecode property value. 
     * @param value Value to set for the entityobjecttypecode property.
     */
    public set entityobjecttypecode(value: number | undefined) {
        this._entityobjecttypecode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._organizationid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Mobileofflineprofileitem)._regardingobjectid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Mobileofflineprofileitem).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Mobileofflineprofileitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Mobileofflineprofileitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofileitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityobjecttypecode": (o, n) => { (o as unknown as Mobileofflineprofileitem).entityobjecttypecode = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Mobileofflineprofileitem).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Mobileofflineprofileitem).ismanaged = n.getBooleanValue(); },
            "isvalidated": (o, n) => { (o as unknown as Mobileofflineprofileitem).isvalidated = n.getBooleanValue(); },
            "isvisibleingrid": (o, n) => { (o as unknown as Mobileofflineprofileitem).isvisibleingrid = n.getBooleanValue(); },
            "mobileOfflineProfileItem_MobileOfflineProfileItemAssociation": (o, n) => { (o as unknown as Mobileofflineprofileitem).mobileOfflineProfileItem_MobileOfflineProfileItemAssociation = n.getCollectionOfObjectValues<Mobileofflineprofileitemassociation>(createMobileofflineprofileitemassociationFromDiscriminatorValue); },
            "mobileofflineprofileitemid": (o, n) => { (o as unknown as Mobileofflineprofileitem).mobileofflineprofileitemid = n.getStringValue(); },
            "mobileofflineprofileitemidunique": (o, n) => { (o as unknown as Mobileofflineprofileitem).mobileofflineprofileitemidunique = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Mobileofflineprofileitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Mobileofflineprofileitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Mobileofflineprofileitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Mobileofflineprofileitem).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Mobileofflineprofileitem).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Mobileofflineprofileitem).overwritetime = n.getDateValue(); },
            "processid": (o, n) => { (o as unknown as Mobileofflineprofileitem).processid = n.getStringValue(); },
            "profileitementityfilter": (o, n) => { (o as unknown as Mobileofflineprofileitem).profileitementityfilter = n.getStringValue(); },
            "profileitemrule": (o, n) => { (o as unknown as Mobileofflineprofileitem).profileitemrule = n.getObjectValue<Savedquery>(createSavedqueryFromDiscriminatorValue); },
            "publishedon": (o, n) => { (o as unknown as Mobileofflineprofileitem).publishedon = n.getDateValue(); },
            "recorddistributioncriteria": (o, n) => { (o as unknown as Mobileofflineprofileitem).recorddistributioncriteria = n.getNumberValue(); },
            "recordsownedbyme": (o, n) => { (o as unknown as Mobileofflineprofileitem).recordsownedbyme = n.getBooleanValue(); },
            "recordsownedbymybusinessunit": (o, n) => { (o as unknown as Mobileofflineprofileitem).recordsownedbymybusinessunit = n.getBooleanValue(); },
            "recordsownedbymyteam": (o, n) => { (o as unknown as Mobileofflineprofileitem).recordsownedbymyteam = n.getBooleanValue(); },
            "regardingobjectid": (o, n) => { (o as unknown as Mobileofflineprofileitem).regardingobjectid = n.getObjectValue<Mobileofflineprofile>(createMobileofflineprofileFromDiscriminatorValue); },
            "relationshipdata": (o, n) => { (o as unknown as Mobileofflineprofileitem).relationshipdata = n.getStringValue(); },
            "selectedentitymetadata": (o, n) => { (o as unknown as Mobileofflineprofileitem).selectedentitymetadata = n.getStringValue(); },
            "selectedentitytypecode": (o, n) => { (o as unknown as Mobileofflineprofileitem).selectedentitytypecode = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Mobileofflineprofileitem).solutionid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Mobileofflineprofileitem).stageid = n.getStringValue(); },
            "syncintervalinminutes": (o, n) => { (o as unknown as Mobileofflineprofileitem).syncintervalinminutes = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Mobileofflineprofileitem).traversedpath = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Mobileofflineprofileitem).versionnumber = n.getNumberValue(); },
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
     * Gets the isvisibleingrid property value. 
     * @returns a boolean
     */
    public get isvisibleingrid() {
        return this._isvisibleingrid;
    };
    /**
     * Sets the isvisibleingrid property value. 
     * @param value Value to set for the isvisibleingrid property.
     */
    public set isvisibleingrid(value: boolean | undefined) {
        this._isvisibleingrid = value;
    };
    /**
     * Gets the mobileOfflineProfileItem_MobileOfflineProfileItemAssociation property value. 
     * @returns a mobileofflineprofileitemassociation
     */
    public get mobileOfflineProfileItem_MobileOfflineProfileItemAssociation() {
        return this._mobileOfflineProfileItem_MobileOfflineProfileItemAssociation;
    };
    /**
     * Sets the mobileOfflineProfileItem_MobileOfflineProfileItemAssociation property value. 
     * @param value Value to set for the MobileOfflineProfileItem_MobileOfflineProfileItemAssociation property.
     */
    public set mobileOfflineProfileItem_MobileOfflineProfileItemAssociation(value: Mobileofflineprofileitemassociation[] | undefined) {
        this._mobileOfflineProfileItem_MobileOfflineProfileItemAssociation = value;
    };
    /**
     * Gets the mobileofflineprofileitemid property value. 
     * @returns a string
     */
    public get mobileofflineprofileitemid() {
        return this._mobileofflineprofileitemid;
    };
    /**
     * Sets the mobileofflineprofileitemid property value. 
     * @param value Value to set for the mobileofflineprofileitemid property.
     */
    public set mobileofflineprofileitemid(value: string | undefined) {
        this._mobileofflineprofileitemid = value;
    };
    /**
     * Gets the mobileofflineprofileitemidunique property value. 
     * @returns a string
     */
    public get mobileofflineprofileitemidunique() {
        return this._mobileofflineprofileitemidunique;
    };
    /**
     * Sets the mobileofflineprofileitemidunique property value. 
     * @param value Value to set for the mobileofflineprofileitemidunique property.
     */
    public set mobileofflineprofileitemidunique(value: string | undefined) {
        this._mobileofflineprofileitemidunique = value;
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
     * Gets the profileitementityfilter property value. 
     * @returns a string
     */
    public get profileitementityfilter() {
        return this._profileitementityfilter;
    };
    /**
     * Sets the profileitementityfilter property value. 
     * @param value Value to set for the profileitementityfilter property.
     */
    public set profileitementityfilter(value: string | undefined) {
        this._profileitementityfilter = value;
    };
    /**
     * Gets the profileitemrule property value. 
     * @returns a savedquery
     */
    public get profileitemrule() {
        return this._profileitemrule;
    };
    /**
     * Sets the profileitemrule property value. 
     * @param value Value to set for the profileitemrule property.
     */
    public set profileitemrule(value: Savedquery | undefined) {
        this._profileitemrule = value;
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
     * Gets the recorddistributioncriteria property value. 
     * @returns a integer
     */
    public get recorddistributioncriteria() {
        return this._recorddistributioncriteria;
    };
    /**
     * Sets the recorddistributioncriteria property value. 
     * @param value Value to set for the recorddistributioncriteria property.
     */
    public set recorddistributioncriteria(value: number | undefined) {
        this._recorddistributioncriteria = value;
    };
    /**
     * Gets the recordsownedbyme property value. 
     * @returns a boolean
     */
    public get recordsownedbyme() {
        return this._recordsownedbyme;
    };
    /**
     * Sets the recordsownedbyme property value. 
     * @param value Value to set for the recordsownedbyme property.
     */
    public set recordsownedbyme(value: boolean | undefined) {
        this._recordsownedbyme = value;
    };
    /**
     * Gets the recordsownedbymybusinessunit property value. 
     * @returns a boolean
     */
    public get recordsownedbymybusinessunit() {
        return this._recordsownedbymybusinessunit;
    };
    /**
     * Sets the recordsownedbymybusinessunit property value. 
     * @param value Value to set for the recordsownedbymybusinessunit property.
     */
    public set recordsownedbymybusinessunit(value: boolean | undefined) {
        this._recordsownedbymybusinessunit = value;
    };
    /**
     * Gets the recordsownedbymyteam property value. 
     * @returns a boolean
     */
    public get recordsownedbymyteam() {
        return this._recordsownedbymyteam;
    };
    /**
     * Sets the recordsownedbymyteam property value. 
     * @param value Value to set for the recordsownedbymyteam property.
     */
    public set recordsownedbymyteam(value: boolean | undefined) {
        this._recordsownedbymyteam = value;
    };
    /**
     * Gets the regardingobjectid property value. 
     * @returns a mobileofflineprofile
     */
    public get regardingobjectid() {
        return this._regardingobjectid;
    };
    /**
     * Sets the regardingobjectid property value. 
     * @param value Value to set for the regardingobjectid property.
     */
    public set regardingobjectid(value: Mobileofflineprofile | undefined) {
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
     * Gets the selectedentitytypecode property value. 
     * @returns a string
     */
    public get selectedentitytypecode() {
        return this._selectedentitytypecode;
    };
    /**
     * Sets the selectedentitytypecode property value. 
     * @param value Value to set for the selectedentitytypecode property.
     */
    public set selectedentitytypecode(value: string | undefined) {
        this._selectedentitytypecode = value;
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
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("entityobjecttypecode", this.entityobjecttypecode);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvalidated", this.isvalidated);
        writer.writeBooleanValue("isvisibleingrid", this.isvisibleingrid);
        writer.writeCollectionOfObjectValues<Mobileofflineprofileitemassociation>("mobileOfflineProfileItem_MobileOfflineProfileItemAssociation", this.mobileOfflineProfileItem_MobileOfflineProfileItemAssociation);
        writer.writeStringValue("mobileofflineprofileitemid", this.mobileofflineprofileitemid);
        writer.writeStringValue("mobileofflineprofileitemidunique", this.mobileofflineprofileitemidunique);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("profileitementityfilter", this.profileitementityfilter);
        writer.writeObjectValue<Savedquery>("profileitemrule", this.profileitemrule);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeNumberValue("recorddistributioncriteria", this.recorddistributioncriteria);
        writer.writeBooleanValue("recordsownedbyme", this.recordsownedbyme);
        writer.writeBooleanValue("recordsownedbymybusinessunit", this.recordsownedbymybusinessunit);
        writer.writeBooleanValue("recordsownedbymyteam", this.recordsownedbymyteam);
        writer.writeObjectValue<Mobileofflineprofile>("regardingobjectid", this.regardingobjectid);
        writer.writeStringValue("relationshipdata", this.relationshipdata);
        writer.writeStringValue("selectedentitymetadata", this.selectedentitymetadata);
        writer.writeStringValue("selectedentitytypecode", this.selectedentitytypecode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeNumberValue("syncintervalinminutes", this.syncintervalinminutes);
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
     * Gets the syncintervalinminutes property value. 
     * @returns a integer
     */
    public get syncintervalinminutes() {
        return this._syncintervalinminutes;
    };
    /**
     * Sets the syncintervalinminutes property value. 
     * @param value Value to set for the syncintervalinminutes property.
     */
    public set syncintervalinminutes(value: number | undefined) {
        this._syncintervalinminutes = value;
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
