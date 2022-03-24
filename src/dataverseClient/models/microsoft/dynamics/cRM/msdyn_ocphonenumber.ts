import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_occarrierFromDiscriminatorValue} from './createMsdyn_occarrierFromDiscriminatorValue';
import {createMsdyn_occommunicationprovidersettingFromDiscriminatorValue} from './createMsdyn_occommunicationprovidersettingFromDiscriminatorValue';
import {createMsdyn_ocprovisioningstateFromDiscriminatorValue} from './createMsdyn_ocprovisioningstateFromDiscriminatorValue';
import {createMsdyn_ocsmschannelsettingFromDiscriminatorValue} from './createMsdyn_ocsmschannelsettingFromDiscriminatorValue';
import {createMsdyn_smsnumberFromDiscriminatorValue} from './createMsdyn_smsnumberFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_occarrier, Msdyn_occommunicationprovidersetting, Msdyn_ocprovisioningstate, Msdyn_ocsmschannelsetting, Msdyn_smsnumber, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocphonenumber extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_carrierid_value?: string | undefined;
    private __msdyn_occommunicationprovidersettingid_value?: string | undefined;
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
    private _msdyn_appmodule?: string | undefined;
    private _msdyn_carrierid?: Msdyn_occarrier | undefined;
    private _msdyn_communicationprovidersettingid?: Msdyn_occommunicationprovidersetting | undefined;
    private _msdyn_countryisocode?: string | undefined;
    private _msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid?: Msdyn_ocprovisioningstate[] | undefined;
    private _msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid?: Msdyn_ocsmschannelsetting[] | undefined;
    private _msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid?: Msdyn_smsnumber[] | undefined;
    private _msdyn_msdyn_ocphonenumber_systemuser_phonenumberid?: Systemuser[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocphonenumber_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocphonenumber_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocphonenumber_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocphonenumber_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocphonenumber_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocphonenumber_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocphonenumber_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocphonenumber_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocphonenumberid?: string | undefined;
    private _msdyn_ocphonenumbersource?: number | undefined;
    private _msdyn_phoneinboundenabled?: boolean | undefined;
    private _msdyn_phonenumber?: string | undefined;
    private _msdyn_phoneoutboundenabled?: boolean | undefined;
    private _msdyn_smsinboundenabled?: boolean | undefined;
    private _msdyn_smsoutboundenabled?: boolean | undefined;
    private _msdyn_type?: number | undefined;
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
     * Gets the _msdyn_carrierid_value property value. 
     * @returns a string
     */
    public get _msdyn_carrierid_value() {
        return this.__msdyn_carrierid_value;
    };
    /**
     * Sets the _msdyn_carrierid_value property value. 
     * @param value Value to set for the _msdyn_carrierid_value property.
     */
    public set _msdyn_carrierid_value(value: string | undefined) {
        this.__msdyn_carrierid_value = value;
    };
    /**
     * Gets the _msdyn_occommunicationprovidersettingid_value property value. 
     * @returns a string
     */
    public get _msdyn_occommunicationprovidersettingid_value() {
        return this.__msdyn_occommunicationprovidersettingid_value;
    };
    /**
     * Sets the _msdyn_occommunicationprovidersettingid_value property value. 
     * @param value Value to set for the _msdyn_occommunicationprovidersettingid_value property.
     */
    public set _msdyn_occommunicationprovidersettingid_value(value: string | undefined) {
        this.__msdyn_occommunicationprovidersettingid_value = value;
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
     * Instantiates a new msdyn_ocphonenumber and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_carrierid_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._msdyn_carrierid_value = n.getStringValue(); },
            "_msdyn_occommunicationprovidersettingid_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._msdyn_occommunicationprovidersettingid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocphonenumber)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocphonenumber).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocphonenumber).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocphonenumber).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocphonenumber).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocphonenumber).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocphonenumber).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocphonenumber).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appmodule": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_appmodule = n.getStringValue(); },
            "msdyn_carrierid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_carrierid = n.getObjectValue<Msdyn_occarrier>(createMsdyn_occarrierFromDiscriminatorValue); },
            "msdyn_communicationprovidersettingid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_communicationprovidersettingid = n.getObjectValue<Msdyn_occommunicationprovidersetting>(createMsdyn_occommunicationprovidersettingFromDiscriminatorValue); },
            "msdyn_countryisocode": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_countryisocode = n.getStringValue(); },
            "msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid = n.getCollectionOfObjectValues<Msdyn_ocprovisioningstate>(createMsdyn_ocprovisioningstateFromDiscriminatorValue); },
            "msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid = n.getCollectionOfObjectValues<Msdyn_ocsmschannelsetting>(createMsdyn_ocsmschannelsettingFromDiscriminatorValue); },
            "msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid = n.getCollectionOfObjectValues<Msdyn_smsnumber>(createMsdyn_smsnumberFromDiscriminatorValue); },
            "msdyn_msdyn_ocphonenumber_systemuser_phonenumberid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_msdyn_ocphonenumber_systemuser_phonenumberid = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_name = n.getStringValue(); },
            "msdyn_ocphonenumber_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocphonenumber_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocphonenumber_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocphonenumber_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocphonenumber_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocphonenumber_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocphonenumber_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocphonenumber_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumber_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocphonenumberid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumberid = n.getStringValue(); },
            "msdyn_ocphonenumbersource": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_ocphonenumbersource = n.getNumberValue(); },
            "msdyn_phoneinboundenabled": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_phoneinboundenabled = n.getBooleanValue(); },
            "msdyn_phonenumber": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_phonenumber = n.getStringValue(); },
            "msdyn_phoneoutboundenabled": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_phoneoutboundenabled = n.getBooleanValue(); },
            "msdyn_smsinboundenabled": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_smsinboundenabled = n.getBooleanValue(); },
            "msdyn_smsoutboundenabled": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_smsoutboundenabled = n.getBooleanValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_ocphonenumber).msdyn_type = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocphonenumber).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocphonenumber).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocphonenumber).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocphonenumber).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocphonenumber).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocphonenumber).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocphonenumber).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocphonenumber).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocphonenumber).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocphonenumber).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_carrierid property value. 
     * @returns a msdyn_occarrier
     */
    public get msdyn_carrierid() {
        return this._msdyn_carrierid;
    };
    /**
     * Sets the msdyn_carrierid property value. 
     * @param value Value to set for the msdyn_carrierid property.
     */
    public set msdyn_carrierid(value: Msdyn_occarrier | undefined) {
        this._msdyn_carrierid = value;
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
     * Gets the msdyn_countryisocode property value. 
     * @returns a string
     */
    public get msdyn_countryisocode() {
        return this._msdyn_countryisocode;
    };
    /**
     * Sets the msdyn_countryisocode property value. 
     * @param value Value to set for the msdyn_countryisocode property.
     */
    public set msdyn_countryisocode(value: string | undefined) {
        this._msdyn_countryisocode = value;
    };
    /**
     * Gets the msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid property value. 
     * @returns a msdyn_ocprovisioningstate
     */
    public get msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid() {
        return this._msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid;
    };
    /**
     * Sets the msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid property value. 
     * @param value Value to set for the msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid property.
     */
    public set msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid(value: Msdyn_ocprovisioningstate[] | undefined) {
        this._msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid property value. 
     * @returns a msdyn_ocsmschannelsetting
     */
    public get msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid() {
        return this._msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid;
    };
    /**
     * Sets the msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid property value. 
     * @param value Value to set for the msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid property.
     */
    public set msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid(value: Msdyn_ocsmschannelsetting[] | undefined) {
        this._msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid property value. 
     * @returns a msdyn_smsnumber
     */
    public get msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid() {
        return this._msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid;
    };
    /**
     * Sets the msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid property value. 
     * @param value Value to set for the msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid property.
     */
    public set msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid(value: Msdyn_smsnumber[] | undefined) {
        this._msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocphonenumber_systemuser_phonenumberid property value. 
     * @returns a systemuser
     */
    public get msdyn_msdyn_ocphonenumber_systemuser_phonenumberid() {
        return this._msdyn_msdyn_ocphonenumber_systemuser_phonenumberid;
    };
    /**
     * Sets the msdyn_msdyn_ocphonenumber_systemuser_phonenumberid property value. 
     * @param value Value to set for the msdyn_msdyn_ocphonenumber_systemuser_phonenumberid property.
     */
    public set msdyn_msdyn_ocphonenumber_systemuser_phonenumberid(value: Systemuser[] | undefined) {
        this._msdyn_msdyn_ocphonenumber_systemuser_phonenumberid = value;
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
     * Gets the msdyn_ocphonenumber_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocphonenumber_AsyncOperations() {
        return this._msdyn_ocphonenumber_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocphonenumber_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocphonenumber_AsyncOperations property.
     */
    public set msdyn_ocphonenumber_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocphonenumber_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocphonenumber_BulkDeleteFailures() {
        return this._msdyn_ocphonenumber_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocphonenumber_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocphonenumber_BulkDeleteFailures property.
     */
    public set msdyn_ocphonenumber_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocphonenumber_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocphonenumber_DuplicateBaseRecord() {
        return this._msdyn_ocphonenumber_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocphonenumber_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocphonenumber_DuplicateBaseRecord property.
     */
    public set msdyn_ocphonenumber_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocphonenumber_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocphonenumber_DuplicateMatchingRecord() {
        return this._msdyn_ocphonenumber_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocphonenumber_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocphonenumber_DuplicateMatchingRecord property.
     */
    public set msdyn_ocphonenumber_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocphonenumber_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocphonenumber_MailboxTrackingFolders() {
        return this._msdyn_ocphonenumber_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocphonenumber_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocphonenumber_MailboxTrackingFolders property.
     */
    public set msdyn_ocphonenumber_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocphonenumber_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocphonenumber_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocphonenumber_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocphonenumber_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocphonenumber_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocphonenumber_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocphonenumber_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocphonenumber_ProcessSession() {
        return this._msdyn_ocphonenumber_ProcessSession;
    };
    /**
     * Sets the msdyn_ocphonenumber_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocphonenumber_ProcessSession property.
     */
    public set msdyn_ocphonenumber_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocphonenumber_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocphonenumber_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocphonenumber_SyncErrors() {
        return this._msdyn_ocphonenumber_SyncErrors;
    };
    /**
     * Sets the msdyn_ocphonenumber_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocphonenumber_SyncErrors property.
     */
    public set msdyn_ocphonenumber_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocphonenumber_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocphonenumberid property value. 
     * @returns a string
     */
    public get msdyn_ocphonenumberid() {
        return this._msdyn_ocphonenumberid;
    };
    /**
     * Sets the msdyn_ocphonenumberid property value. 
     * @param value Value to set for the msdyn_ocphonenumberid property.
     */
    public set msdyn_ocphonenumberid(value: string | undefined) {
        this._msdyn_ocphonenumberid = value;
    };
    /**
     * Gets the msdyn_ocphonenumbersource property value. 
     * @returns a integer
     */
    public get msdyn_ocphonenumbersource() {
        return this._msdyn_ocphonenumbersource;
    };
    /**
     * Sets the msdyn_ocphonenumbersource property value. 
     * @param value Value to set for the msdyn_ocphonenumbersource property.
     */
    public set msdyn_ocphonenumbersource(value: number | undefined) {
        this._msdyn_ocphonenumbersource = value;
    };
    /**
     * Gets the msdyn_phoneinboundenabled property value. 
     * @returns a boolean
     */
    public get msdyn_phoneinboundenabled() {
        return this._msdyn_phoneinboundenabled;
    };
    /**
     * Sets the msdyn_phoneinboundenabled property value. 
     * @param value Value to set for the msdyn_phoneinboundenabled property.
     */
    public set msdyn_phoneinboundenabled(value: boolean | undefined) {
        this._msdyn_phoneinboundenabled = value;
    };
    /**
     * Gets the msdyn_phonenumber property value. 
     * @returns a string
     */
    public get msdyn_phonenumber() {
        return this._msdyn_phonenumber;
    };
    /**
     * Sets the msdyn_phonenumber property value. 
     * @param value Value to set for the msdyn_phonenumber property.
     */
    public set msdyn_phonenumber(value: string | undefined) {
        this._msdyn_phonenumber = value;
    };
    /**
     * Gets the msdyn_phoneoutboundenabled property value. 
     * @returns a boolean
     */
    public get msdyn_phoneoutboundenabled() {
        return this._msdyn_phoneoutboundenabled;
    };
    /**
     * Sets the msdyn_phoneoutboundenabled property value. 
     * @param value Value to set for the msdyn_phoneoutboundenabled property.
     */
    public set msdyn_phoneoutboundenabled(value: boolean | undefined) {
        this._msdyn_phoneoutboundenabled = value;
    };
    /**
     * Gets the msdyn_smsinboundenabled property value. 
     * @returns a boolean
     */
    public get msdyn_smsinboundenabled() {
        return this._msdyn_smsinboundenabled;
    };
    /**
     * Sets the msdyn_smsinboundenabled property value. 
     * @param value Value to set for the msdyn_smsinboundenabled property.
     */
    public set msdyn_smsinboundenabled(value: boolean | undefined) {
        this._msdyn_smsinboundenabled = value;
    };
    /**
     * Gets the msdyn_smsoutboundenabled property value. 
     * @returns a boolean
     */
    public get msdyn_smsoutboundenabled() {
        return this._msdyn_smsoutboundenabled;
    };
    /**
     * Sets the msdyn_smsoutboundenabled property value. 
     * @param value Value to set for the msdyn_smsoutboundenabled property.
     */
    public set msdyn_smsoutboundenabled(value: boolean | undefined) {
        this._msdyn_smsoutboundenabled = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
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
        writer.writeStringValue("_msdyn_carrierid_value", this._msdyn_carrierid_value);
        writer.writeStringValue("_msdyn_occommunicationprovidersettingid_value", this._msdyn_occommunicationprovidersettingid_value);
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
        writer.writeStringValue("msdyn_appmodule", this.msdyn_appmodule);
        writer.writeObjectValue<Msdyn_occarrier>("msdyn_carrierid", this.msdyn_carrierid);
        writer.writeObjectValue<Msdyn_occommunicationprovidersetting>("msdyn_communicationprovidersettingid", this.msdyn_communicationprovidersettingid);
        writer.writeStringValue("msdyn_countryisocode", this.msdyn_countryisocode);
        writer.writeCollectionOfObjectValues<Msdyn_ocprovisioningstate>("msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid", this.msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsmschannelsetting>("msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid", this.msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid);
        writer.writeCollectionOfObjectValues<Msdyn_smsnumber>("msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid", this.msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyn_msdyn_ocphonenumber_systemuser_phonenumberid", this.msdyn_msdyn_ocphonenumber_systemuser_phonenumberid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocphonenumber_AsyncOperations", this.msdyn_ocphonenumber_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocphonenumber_BulkDeleteFailures", this.msdyn_ocphonenumber_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocphonenumber_DuplicateBaseRecord", this.msdyn_ocphonenumber_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocphonenumber_DuplicateMatchingRecord", this.msdyn_ocphonenumber_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocphonenumber_MailboxTrackingFolders", this.msdyn_ocphonenumber_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocphonenumber_PrincipalObjectAttributeAccesses", this.msdyn_ocphonenumber_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocphonenumber_ProcessSession", this.msdyn_ocphonenumber_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocphonenumber_SyncErrors", this.msdyn_ocphonenumber_SyncErrors);
        writer.writeStringValue("msdyn_ocphonenumberid", this.msdyn_ocphonenumberid);
        writer.writeNumberValue("msdyn_ocphonenumbersource", this.msdyn_ocphonenumbersource);
        writer.writeBooleanValue("msdyn_phoneinboundenabled", this.msdyn_phoneinboundenabled);
        writer.writeStringValue("msdyn_phonenumber", this.msdyn_phonenumber);
        writer.writeBooleanValue("msdyn_phoneoutboundenabled", this.msdyn_phoneoutboundenabled);
        writer.writeBooleanValue("msdyn_smsinboundenabled", this.msdyn_smsinboundenabled);
        writer.writeBooleanValue("msdyn_smsoutboundenabled", this.msdyn_smsoutboundenabled);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
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
