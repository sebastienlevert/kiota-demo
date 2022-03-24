import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocbotchannelregistrationFromDiscriminatorValue} from './createMsdyn_ocbotchannelregistrationFromDiscriminatorValue';
import {createMsdyn_occommunicationprovidersettingentryFromDiscriminatorValue} from './createMsdyn_occommunicationprovidersettingentryFromDiscriminatorValue';
import {createMsdyn_ocphonenumberFromDiscriminatorValue} from './createMsdyn_ocphonenumberFromDiscriminatorValue';
import {createMsdyn_ocprovisioningstateFromDiscriminatorValue} from './createMsdyn_ocprovisioningstateFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocbotchannelregistration, Msdyn_occommunicationprovidersettingentry, Msdyn_ocphonenumber, Msdyn_ocprovisioningstate, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_occommunicationprovidersetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_accountsid?: string | undefined;
    private _msdyn_appmodule?: string | undefined;
    private _msdyn_istrial?: boolean | undefined;
    private _msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider?: Msdyn_ocbotchannelregistration[] | undefined;
    private _msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid?: Msdyn_ocphonenumber[] | undefined;
    private _msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid?: Msdyn_ocprovisioningstate[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_occommunicationprovider?: number | undefined;
    private _msdyn_occommunicationprovidersetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_occommunicationprovidersetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_occommunicationprovidersetting_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occommunicationprovidersetting_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occommunicationprovidersetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_occommunicationprovidersetting_msdyn_entr?: Msdyn_occommunicationprovidersettingentry[] | undefined;
    private _msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_occommunicationprovidersetting_ProcessSession?: Processsession[] | undefined;
    private _msdyn_occommunicationprovidersetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_occommunicationprovidersettingid?: string | undefined;
    private _msdyn_secret?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_occommunicationprovidersetting and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_accountsid": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_accountsid = n.getStringValue(); },
            "msdyn_appmodule": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_appmodule = n.getStringValue(); },
            "msdyn_istrial": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_istrial = n.getBooleanValue(); },
            "msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider = n.getCollectionOfObjectValues<Msdyn_ocbotchannelregistration>(createMsdyn_ocbotchannelregistrationFromDiscriminatorValue); },
            "msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid = n.getCollectionOfObjectValues<Msdyn_ocphonenumber>(createMsdyn_ocphonenumberFromDiscriminatorValue); },
            "msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid = n.getCollectionOfObjectValues<Msdyn_ocprovisioningstate>(createMsdyn_ocprovisioningstateFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_name = n.getStringValue(); },
            "msdyn_occommunicationprovider": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovider = n.getNumberValue(); },
            "msdyn_occommunicationprovidersetting_AsyncOperations": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_msdyn_entr": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_msdyn_entr = n.getCollectionOfObjectValues<Msdyn_occommunicationprovidersettingentry>(createMsdyn_occommunicationprovidersettingentryFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_ProcessSession": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersetting_SyncErrors": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_occommunicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_occommunicationprovidersettingid = n.getStringValue(); },
            "msdyn_secret": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).msdyn_secret = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_occommunicationprovidersetting).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the msdyn_accountsid property value. 
     * @returns a string
     */
    public get msdyn_accountsid() {
        return this._msdyn_accountsid;
    };
    /**
     * Sets the msdyn_accountsid property value. 
     * @param value Value to set for the msdyn_accountsid property.
     */
    public set msdyn_accountsid(value: string | undefined) {
        this._msdyn_accountsid = value;
    };
    /**
     * Gets the msdyn_appmodule property value. 
     * @returns a string
     */
    public get msdyn_appmodule() {
        return this._msdyn_appmodule;
    };
    /**
     * Sets the msdyn_appmodule property value. 
     * @param value Value to set for the msdyn_appmodule property.
     */
    public set msdyn_appmodule(value: string | undefined) {
        this._msdyn_appmodule = value;
    };
    /**
     * Gets the msdyn_istrial property value. 
     * @returns a boolean
     */
    public get msdyn_istrial() {
        return this._msdyn_istrial;
    };
    /**
     * Sets the msdyn_istrial property value. 
     * @param value Value to set for the msdyn_istrial property.
     */
    public set msdyn_istrial(value: boolean | undefined) {
        this._msdyn_istrial = value;
    };
    /**
     * Gets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider property value. 
     * @returns a msdyn_ocbotchannelregistration
     */
    public get msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider() {
        return this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider;
    };
    /**
     * Sets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider property value. 
     * @param value Value to set for the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider property.
     */
    public set msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider(value: Msdyn_ocbotchannelregistration[] | undefined) {
        this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider = value;
    };
    /**
     * Gets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid property value. 
     * @returns a msdyn_ocphonenumber
     */
    public get msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid() {
        return this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid;
    };
    /**
     * Sets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid property value. 
     * @param value Value to set for the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid property.
     */
    public set msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid(value: Msdyn_ocphonenumber[] | undefined) {
        this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid = value;
    };
    /**
     * Gets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid property value. 
     * @returns a msdyn_ocprovisioningstate
     */
    public get msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid() {
        return this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid;
    };
    /**
     * Sets the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid property value. 
     * @param value Value to set for the msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid property.
     */
    public set msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid(value: Msdyn_ocprovisioningstate[] | undefined) {
        this._msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_occommunicationprovider property value. 
     * @returns a integer
     */
    public get msdyn_occommunicationprovider() {
        return this._msdyn_occommunicationprovider;
    };
    /**
     * Sets the msdyn_occommunicationprovider property value. 
     * @param value Value to set for the msdyn_occommunicationprovider property.
     */
    public set msdyn_occommunicationprovider(value: number | undefined) {
        this._msdyn_occommunicationprovider = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_occommunicationprovidersetting_AsyncOperations() {
        return this._msdyn_occommunicationprovidersetting_AsyncOperations;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_AsyncOperations property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_AsyncOperations property.
     */
    public set msdyn_occommunicationprovidersetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_occommunicationprovidersetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_occommunicationprovidersetting_BulkDeleteFailures() {
        return this._msdyn_occommunicationprovidersetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_BulkDeleteFailures property.
     */
    public set msdyn_occommunicationprovidersetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_occommunicationprovidersetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occommunicationprovidersetting_DuplicateBaseRecord() {
        return this._msdyn_occommunicationprovidersetting_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_DuplicateBaseRecord property.
     */
    public set msdyn_occommunicationprovidersetting_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occommunicationprovidersetting_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occommunicationprovidersetting_DuplicateMatchingRecord() {
        return this._msdyn_occommunicationprovidersetting_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_DuplicateMatchingRecord property.
     */
    public set msdyn_occommunicationprovidersetting_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occommunicationprovidersetting_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_occommunicationprovidersetting_MailboxTrackingFolders() {
        return this._msdyn_occommunicationprovidersetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_MailboxTrackingFolders property.
     */
    public set msdyn_occommunicationprovidersetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_occommunicationprovidersetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_msdyn_entr property value. 
     * @returns a msdyn_occommunicationprovidersettingentry
     */
    public get msdyn_occommunicationprovidersetting_msdyn_entr() {
        return this._msdyn_occommunicationprovidersetting_msdyn_entr;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_msdyn_entr property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_msdyn_entr property.
     */
    public set msdyn_occommunicationprovidersetting_msdyn_entr(value: Msdyn_occommunicationprovidersettingentry[] | undefined) {
        this._msdyn_occommunicationprovidersetting_msdyn_entr = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses() {
        return this._msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_occommunicationprovidersetting_ProcessSession() {
        return this._msdyn_occommunicationprovidersetting_ProcessSession;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_ProcessSession property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_ProcessSession property.
     */
    public set msdyn_occommunicationprovidersetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_occommunicationprovidersetting_ProcessSession = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_occommunicationprovidersetting_SyncErrors() {
        return this._msdyn_occommunicationprovidersetting_SyncErrors;
    };
    /**
     * Sets the msdyn_occommunicationprovidersetting_SyncErrors property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersetting_SyncErrors property.
     */
    public set msdyn_occommunicationprovidersetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_occommunicationprovidersetting_SyncErrors = value;
    };
    /**
     * Gets the msdyn_occommunicationprovidersettingid property value. 
     * @returns a string
     */
    public get msdyn_occommunicationprovidersettingid() {
        return this._msdyn_occommunicationprovidersettingid;
    };
    /**
     * Sets the msdyn_occommunicationprovidersettingid property value. 
     * @param value Value to set for the msdyn_occommunicationprovidersettingid property.
     */
    public set msdyn_occommunicationprovidersettingid(value: string | undefined) {
        this._msdyn_occommunicationprovidersettingid = value;
    };
    /**
     * Gets the msdyn_secret property value. 
     * @returns a string
     */
    public get msdyn_secret() {
        return this._msdyn_secret;
    };
    /**
     * Sets the msdyn_secret property value. 
     * @param value Value to set for the msdyn_secret property.
     */
    public set msdyn_secret(value: string | undefined) {
        this._msdyn_secret = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_accountsid", this.msdyn_accountsid);
        writer.writeStringValue("msdyn_appmodule", this.msdyn_appmodule);
        writer.writeBooleanValue("msdyn_istrial", this.msdyn_istrial);
        writer.writeCollectionOfObjectValues<Msdyn_ocbotchannelregistration>("msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider", this.msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider);
        writer.writeCollectionOfObjectValues<Msdyn_ocphonenumber>("msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid", this.msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid);
        writer.writeCollectionOfObjectValues<Msdyn_ocprovisioningstate>("msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid", this.msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_occommunicationprovider", this.msdyn_occommunicationprovider);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_occommunicationprovidersetting_AsyncOperations", this.msdyn_occommunicationprovidersetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_occommunicationprovidersetting_BulkDeleteFailures", this.msdyn_occommunicationprovidersetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occommunicationprovidersetting_DuplicateBaseRecord", this.msdyn_occommunicationprovidersetting_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occommunicationprovidersetting_DuplicateMatchingRecord", this.msdyn_occommunicationprovidersetting_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_occommunicationprovidersetting_MailboxTrackingFolders", this.msdyn_occommunicationprovidersetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_occommunicationprovidersettingentry>("msdyn_occommunicationprovidersetting_msdyn_entr", this.msdyn_occommunicationprovidersetting_msdyn_entr);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses", this.msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_occommunicationprovidersetting_ProcessSession", this.msdyn_occommunicationprovidersetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_occommunicationprovidersetting_SyncErrors", this.msdyn_occommunicationprovidersetting_SyncErrors);
        writer.writeStringValue("msdyn_occommunicationprovidersettingid", this.msdyn_occommunicationprovidersettingid);
        writer.writeStringValue("msdyn_secret", this.msdyn_secret);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
