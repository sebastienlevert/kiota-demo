import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_occommunicationprovidersettingFromDiscriminatorValue} from './createMsdyn_occommunicationprovidersettingFromDiscriminatorValue';
import {createMsdyn_ocfbapplicationFromDiscriminatorValue} from './createMsdyn_ocfbapplicationFromDiscriminatorValue';
import {createMsdyn_ocfbpageFromDiscriminatorValue} from './createMsdyn_ocfbpageFromDiscriminatorValue';
import {createMsdyn_oclinechannelconfigFromDiscriminatorValue} from './createMsdyn_oclinechannelconfigFromDiscriminatorValue';
import {createMsdyn_ocphonenumberFromDiscriminatorValue} from './createMsdyn_ocphonenumberFromDiscriminatorValue';
import {createMsdyn_octeamschannelconfigFromDiscriminatorValue} from './createMsdyn_octeamschannelconfigFromDiscriminatorValue';
import {createMsdyn_ocwhatsappchannelaccountFromDiscriminatorValue} from './createMsdyn_ocwhatsappchannelaccountFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_occommunicationprovidersetting, Msdyn_ocfbapplication, Msdyn_ocfbpage, Msdyn_oclinechannelconfig, Msdyn_ocphonenumber, Msdyn_octeamschannelconfig, Msdyn_ocwhatsappchannelaccount, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocprovisioningstate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_communicationprovidersettingid_value?: string | undefined;
    private __msdyn_ocfbapplicationid_value?: string | undefined;
    private __msdyn_ocfbpageid_value?: string | undefined;
    private __msdyn_oclinechannelconfigid_value?: string | undefined;
    private __msdyn_octeamschannelconfigid_value?: string | undefined;
    private __msdyn_ocwhatsappchannelaccountid_value?: string | undefined;
    private __msdyn_phonenumberid_value?: string | undefined;
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
    private _msdyn_communicationprovidersettingid?: Msdyn_occommunicationprovidersetting | undefined;
    private _msdyn_errormessage?: string | undefined;
    private _msdyn_exceptiondetails?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocfbapplicationid?: Msdyn_ocfbapplication | undefined;
    private _msdyn_ocfbpageid?: Msdyn_ocfbpage | undefined;
    private _msdyn_oclinechannelconfigid?: Msdyn_oclinechannelconfig | undefined;
    private _msdyn_ocprovisioningstate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocprovisioningstate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocprovisioningstate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocprovisioningstate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocprovisioningstate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocprovisioningstate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocprovisioningstate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocprovisioningstateid?: string | undefined;
    private _msdyn_octeamschannelconfigid?: Msdyn_octeamschannelconfig | undefined;
    private _msdyn_ocwhatsappchannelaccountId?: Msdyn_ocwhatsappchannelaccount | undefined;
    private _msdyn_phonenumberid?: Msdyn_ocphonenumber | undefined;
    private _msdyn_provisioningresponse?: string | undefined;
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
     * Gets the _msdyn_communicationprovidersettingid_value property value. 
     * @returns a string
     */
    public get _msdyn_communicationprovidersettingid_value() {
        return this.__msdyn_communicationprovidersettingid_value;
    };
    /**
     * Sets the _msdyn_communicationprovidersettingid_value property value. 
     * @param value Value to set for the _msdyn_communicationprovidersettingid_value property.
     */
    public set _msdyn_communicationprovidersettingid_value(value: string | undefined) {
        this.__msdyn_communicationprovidersettingid_value = value;
    };
    /**
     * Gets the _msdyn_ocfbapplicationid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocfbapplicationid_value() {
        return this.__msdyn_ocfbapplicationid_value;
    };
    /**
     * Sets the _msdyn_ocfbapplicationid_value property value. 
     * @param value Value to set for the _msdyn_ocfbapplicationid_value property.
     */
    public set _msdyn_ocfbapplicationid_value(value: string | undefined) {
        this.__msdyn_ocfbapplicationid_value = value;
    };
    /**
     * Gets the _msdyn_ocfbpageid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocfbpageid_value() {
        return this.__msdyn_ocfbpageid_value;
    };
    /**
     * Sets the _msdyn_ocfbpageid_value property value. 
     * @param value Value to set for the _msdyn_ocfbpageid_value property.
     */
    public set _msdyn_ocfbpageid_value(value: string | undefined) {
        this.__msdyn_ocfbpageid_value = value;
    };
    /**
     * Gets the _msdyn_oclinechannelconfigid_value property value. 
     * @returns a string
     */
    public get _msdyn_oclinechannelconfigid_value() {
        return this.__msdyn_oclinechannelconfigid_value;
    };
    /**
     * Sets the _msdyn_oclinechannelconfigid_value property value. 
     * @param value Value to set for the _msdyn_oclinechannelconfigid_value property.
     */
    public set _msdyn_oclinechannelconfigid_value(value: string | undefined) {
        this.__msdyn_oclinechannelconfigid_value = value;
    };
    /**
     * Gets the _msdyn_octeamschannelconfigid_value property value. 
     * @returns a string
     */
    public get _msdyn_octeamschannelconfigid_value() {
        return this.__msdyn_octeamschannelconfigid_value;
    };
    /**
     * Sets the _msdyn_octeamschannelconfigid_value property value. 
     * @param value Value to set for the _msdyn_octeamschannelconfigid_value property.
     */
    public set _msdyn_octeamschannelconfigid_value(value: string | undefined) {
        this.__msdyn_octeamschannelconfigid_value = value;
    };
    /**
     * Gets the _msdyn_ocwhatsappchannelaccountid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocwhatsappchannelaccountid_value() {
        return this.__msdyn_ocwhatsappchannelaccountid_value;
    };
    /**
     * Sets the _msdyn_ocwhatsappchannelaccountid_value property value. 
     * @param value Value to set for the _msdyn_ocwhatsappchannelaccountid_value property.
     */
    public set _msdyn_ocwhatsappchannelaccountid_value(value: string | undefined) {
        this.__msdyn_ocwhatsappchannelaccountid_value = value;
    };
    /**
     * Gets the _msdyn_phonenumberid_value property value. 
     * @returns a string
     */
    public get _msdyn_phonenumberid_value() {
        return this.__msdyn_phonenumberid_value;
    };
    /**
     * Sets the _msdyn_phonenumberid_value property value. 
     * @param value Value to set for the _msdyn_phonenumberid_value property.
     */
    public set _msdyn_phonenumberid_value(value: string | undefined) {
        this.__msdyn_phonenumberid_value = value;
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
     * Instantiates a new msdyn_ocprovisioningstate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_communicationprovidersettingid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_communicationprovidersettingid_value = n.getStringValue(); },
            "_msdyn_ocfbapplicationid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_ocfbapplicationid_value = n.getStringValue(); },
            "_msdyn_ocfbpageid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_ocfbpageid_value = n.getStringValue(); },
            "_msdyn_oclinechannelconfigid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_oclinechannelconfigid_value = n.getStringValue(); },
            "_msdyn_octeamschannelconfigid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_octeamschannelconfigid_value = n.getStringValue(); },
            "_msdyn_ocwhatsappchannelaccountid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_ocwhatsappchannelaccountid_value = n.getStringValue(); },
            "_msdyn_phonenumberid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._msdyn_phonenumberid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_communicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_communicationprovidersettingid = n.getObjectValue<Msdyn_occommunicationprovidersetting>(createMsdyn_occommunicationprovidersettingFromDiscriminatorValue); },
            "msdyn_errormessage": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_errormessage = n.getStringValue(); },
            "msdyn_exceptiondetails": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_exceptiondetails = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_name = n.getStringValue(); },
            "msdyn_ocfbapplicationid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocfbapplicationid = n.getObjectValue<Msdyn_ocfbapplication>(createMsdyn_ocfbapplicationFromDiscriminatorValue); },
            "msdyn_ocfbpageid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocfbpageid = n.getObjectValue<Msdyn_ocfbpage>(createMsdyn_ocfbpageFromDiscriminatorValue); },
            "msdyn_oclinechannelconfigid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_oclinechannelconfigid = n.getObjectValue<Msdyn_oclinechannelconfig>(createMsdyn_oclinechannelconfigFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocprovisioningstate_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocprovisioningstateid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocprovisioningstateid = n.getStringValue(); },
            "msdyn_octeamschannelconfigid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_octeamschannelconfigid = n.getObjectValue<Msdyn_octeamschannelconfig>(createMsdyn_octeamschannelconfigFromDiscriminatorValue); },
            "msdyn_ocwhatsappchannelaccountId": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_ocwhatsappchannelaccountId = n.getObjectValue<Msdyn_ocwhatsappchannelaccount>(createMsdyn_ocwhatsappchannelaccountFromDiscriminatorValue); },
            "msdyn_phonenumberid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_phonenumberid = n.getObjectValue<Msdyn_ocphonenumber>(createMsdyn_ocphonenumberFromDiscriminatorValue); },
            "msdyn_provisioningresponse": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).msdyn_provisioningresponse = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocprovisioningstate).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_communicationprovidersettingid property value. 
     * @returns a msdyn_occommunicationprovidersetting
     */
    public get msdyn_communicationprovidersettingid() {
        return this._msdyn_communicationprovidersettingid;
    };
    /**
     * Sets the msdyn_communicationprovidersettingid property value. 
     * @param value Value to set for the msdyn_communicationprovidersettingid property.
     */
    public set msdyn_communicationprovidersettingid(value: Msdyn_occommunicationprovidersetting | undefined) {
        this._msdyn_communicationprovidersettingid = value;
    };
    /**
     * Gets the msdyn_errormessage property value. 
     * @returns a string
     */
    public get msdyn_errormessage() {
        return this._msdyn_errormessage;
    };
    /**
     * Sets the msdyn_errormessage property value. 
     * @param value Value to set for the msdyn_errormessage property.
     */
    public set msdyn_errormessage(value: string | undefined) {
        this._msdyn_errormessage = value;
    };
    /**
     * Gets the msdyn_exceptiondetails property value. 
     * @returns a string
     */
    public get msdyn_exceptiondetails() {
        return this._msdyn_exceptiondetails;
    };
    /**
     * Sets the msdyn_exceptiondetails property value. 
     * @param value Value to set for the msdyn_exceptiondetails property.
     */
    public set msdyn_exceptiondetails(value: string | undefined) {
        this._msdyn_exceptiondetails = value;
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
     * Gets the msdyn_ocfbapplicationid property value. 
     * @returns a msdyn_ocfbapplication
     */
    public get msdyn_ocfbapplicationid() {
        return this._msdyn_ocfbapplicationid;
    };
    /**
     * Sets the msdyn_ocfbapplicationid property value. 
     * @param value Value to set for the msdyn_ocfbapplicationid property.
     */
    public set msdyn_ocfbapplicationid(value: Msdyn_ocfbapplication | undefined) {
        this._msdyn_ocfbapplicationid = value;
    };
    /**
     * Gets the msdyn_ocfbpageid property value. 
     * @returns a msdyn_ocfbpage
     */
    public get msdyn_ocfbpageid() {
        return this._msdyn_ocfbpageid;
    };
    /**
     * Sets the msdyn_ocfbpageid property value. 
     * @param value Value to set for the msdyn_ocfbpageid property.
     */
    public set msdyn_ocfbpageid(value: Msdyn_ocfbpage | undefined) {
        this._msdyn_ocfbpageid = value;
    };
    /**
     * Gets the msdyn_oclinechannelconfigid property value. 
     * @returns a msdyn_oclinechannelconfig
     */
    public get msdyn_oclinechannelconfigid() {
        return this._msdyn_oclinechannelconfigid;
    };
    /**
     * Sets the msdyn_oclinechannelconfigid property value. 
     * @param value Value to set for the msdyn_oclinechannelconfigid property.
     */
    public set msdyn_oclinechannelconfigid(value: Msdyn_oclinechannelconfig | undefined) {
        this._msdyn_oclinechannelconfigid = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocprovisioningstate_AsyncOperations() {
        return this._msdyn_ocprovisioningstate_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_AsyncOperations property.
     */
    public set msdyn_ocprovisioningstate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocprovisioningstate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocprovisioningstate_BulkDeleteFailures() {
        return this._msdyn_ocprovisioningstate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_BulkDeleteFailures property.
     */
    public set msdyn_ocprovisioningstate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocprovisioningstate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocprovisioningstate_DuplicateBaseRecord() {
        return this._msdyn_ocprovisioningstate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_DuplicateBaseRecord property.
     */
    public set msdyn_ocprovisioningstate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocprovisioningstate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocprovisioningstate_DuplicateMatchingRecord() {
        return this._msdyn_ocprovisioningstate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_DuplicateMatchingRecord property.
     */
    public set msdyn_ocprovisioningstate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocprovisioningstate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocprovisioningstate_MailboxTrackingFolders() {
        return this._msdyn_ocprovisioningstate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_MailboxTrackingFolders property.
     */
    public set msdyn_ocprovisioningstate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocprovisioningstate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocprovisioningstate_ProcessSession() {
        return this._msdyn_ocprovisioningstate_ProcessSession;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_ProcessSession property.
     */
    public set msdyn_ocprovisioningstate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocprovisioningstate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocprovisioningstate_SyncErrors() {
        return this._msdyn_ocprovisioningstate_SyncErrors;
    };
    /**
     * Sets the msdyn_ocprovisioningstate_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocprovisioningstate_SyncErrors property.
     */
    public set msdyn_ocprovisioningstate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocprovisioningstate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocprovisioningstateid property value. 
     * @returns a string
     */
    public get msdyn_ocprovisioningstateid() {
        return this._msdyn_ocprovisioningstateid;
    };
    /**
     * Sets the msdyn_ocprovisioningstateid property value. 
     * @param value Value to set for the msdyn_ocprovisioningstateid property.
     */
    public set msdyn_ocprovisioningstateid(value: string | undefined) {
        this._msdyn_ocprovisioningstateid = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfigid property value. 
     * @returns a msdyn_octeamschannelconfig
     */
    public get msdyn_octeamschannelconfigid() {
        return this._msdyn_octeamschannelconfigid;
    };
    /**
     * Sets the msdyn_octeamschannelconfigid property value. 
     * @param value Value to set for the msdyn_octeamschannelconfigid property.
     */
    public set msdyn_octeamschannelconfigid(value: Msdyn_octeamschannelconfig | undefined) {
        this._msdyn_octeamschannelconfigid = value;
    };
    /**
     * Gets the msdyn_ocwhatsappchannelaccountId property value. 
     * @returns a msdyn_ocwhatsappchannelaccount
     */
    public get msdyn_ocwhatsappchannelaccountId() {
        return this._msdyn_ocwhatsappchannelaccountId;
    };
    /**
     * Sets the msdyn_ocwhatsappchannelaccountId property value. 
     * @param value Value to set for the msdyn_ocwhatsappchannelaccountId property.
     */
    public set msdyn_ocwhatsappchannelaccountId(value: Msdyn_ocwhatsappchannelaccount | undefined) {
        this._msdyn_ocwhatsappchannelaccountId = value;
    };
    /**
     * Gets the msdyn_phonenumberid property value. 
     * @returns a msdyn_ocphonenumber
     */
    public get msdyn_phonenumberid() {
        return this._msdyn_phonenumberid;
    };
    /**
     * Sets the msdyn_phonenumberid property value. 
     * @param value Value to set for the msdyn_phonenumberid property.
     */
    public set msdyn_phonenumberid(value: Msdyn_ocphonenumber | undefined) {
        this._msdyn_phonenumberid = value;
    };
    /**
     * Gets the msdyn_provisioningresponse property value. 
     * @returns a string
     */
    public get msdyn_provisioningresponse() {
        return this._msdyn_provisioningresponse;
    };
    /**
     * Sets the msdyn_provisioningresponse property value. 
     * @param value Value to set for the msdyn_provisioningresponse property.
     */
    public set msdyn_provisioningresponse(value: string | undefined) {
        this._msdyn_provisioningresponse = value;
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
        writer.writeStringValue("_msdyn_communicationprovidersettingid_value", this._msdyn_communicationprovidersettingid_value);
        writer.writeStringValue("_msdyn_ocfbapplicationid_value", this._msdyn_ocfbapplicationid_value);
        writer.writeStringValue("_msdyn_ocfbpageid_value", this._msdyn_ocfbpageid_value);
        writer.writeStringValue("_msdyn_oclinechannelconfigid_value", this._msdyn_oclinechannelconfigid_value);
        writer.writeStringValue("_msdyn_octeamschannelconfigid_value", this._msdyn_octeamschannelconfigid_value);
        writer.writeStringValue("_msdyn_ocwhatsappchannelaccountid_value", this._msdyn_ocwhatsappchannelaccountid_value);
        writer.writeStringValue("_msdyn_phonenumberid_value", this._msdyn_phonenumberid_value);
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
        writer.writeObjectValue<Msdyn_occommunicationprovidersetting>("msdyn_communicationprovidersettingid", this.msdyn_communicationprovidersettingid);
        writer.writeStringValue("msdyn_errormessage", this.msdyn_errormessage);
        writer.writeStringValue("msdyn_exceptiondetails", this.msdyn_exceptiondetails);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_ocfbapplication>("msdyn_ocfbapplicationid", this.msdyn_ocfbapplicationid);
        writer.writeObjectValue<Msdyn_ocfbpage>("msdyn_ocfbpageid", this.msdyn_ocfbpageid);
        writer.writeObjectValue<Msdyn_oclinechannelconfig>("msdyn_oclinechannelconfigid", this.msdyn_oclinechannelconfigid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocprovisioningstate_AsyncOperations", this.msdyn_ocprovisioningstate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocprovisioningstate_BulkDeleteFailures", this.msdyn_ocprovisioningstate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocprovisioningstate_DuplicateBaseRecord", this.msdyn_ocprovisioningstate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocprovisioningstate_DuplicateMatchingRecord", this.msdyn_ocprovisioningstate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocprovisioningstate_MailboxTrackingFolders", this.msdyn_ocprovisioningstate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses", this.msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocprovisioningstate_ProcessSession", this.msdyn_ocprovisioningstate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocprovisioningstate_SyncErrors", this.msdyn_ocprovisioningstate_SyncErrors);
        writer.writeStringValue("msdyn_ocprovisioningstateid", this.msdyn_ocprovisioningstateid);
        writer.writeObjectValue<Msdyn_octeamschannelconfig>("msdyn_octeamschannelconfigid", this.msdyn_octeamschannelconfigid);
        writer.writeObjectValue<Msdyn_ocwhatsappchannelaccount>("msdyn_ocwhatsappchannelaccountId", this.msdyn_ocwhatsappchannelaccountId);
        writer.writeObjectValue<Msdyn_ocphonenumber>("msdyn_phonenumberid", this.msdyn_phonenumberid);
        writer.writeStringValue("msdyn_provisioningresponse", this.msdyn_provisioningresponse);
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
