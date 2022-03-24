import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_octwitterhandleFromDiscriminatorValue} from './createMsdyn_octwitterhandleFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Asyncoperation, Businessunit, Connection, Contact, Crmbaseentity, Duplicaterecord, Incident, Msdyn_ocliveworkitem, Msdyn_octwitterhandle, Principal, Principalobjectattributeaccess, Processsession, Socialactivity, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Socialprofile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customerid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_octwitterhandleid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _blocked?: boolean | undefined;
    private _community?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customerid_account?: Account | undefined;
    private _customerid_contact?: Contact | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _influencescore?: number | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_customeroptout?: boolean | undefined;
    private _msdyn_ocfollowercount?: number | undefined;
    private _msdyn_ocfollowingcount?: number | undefined;
    private _msdyn_ocfriendcount?: number | undefined;
    private _msdyn_octwitterhandleid?: Msdyn_octwitterhandle | undefined;
    private _msdyn_phonenumber?: string | undefined;
    private _msdyn_profileimagelink?: string | undefined;
    private _msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid?: Msdyn_ocliveworkitem[] | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owninguser?: Systemuser | undefined;
    private _profilefullname?: string | undefined;
    private _profilelink?: string | undefined;
    private _profilename?: string | undefined;
    private _socialProfile_AsyncOperations?: Asyncoperation[] | undefined;
    private _socialprofile_cases?: Incident[] | undefined;
    private _socialprofile_connections1?: Connection[] | undefined;
    private _socialprofile_connections2?: Connection[] | undefined;
    private _socialProfile_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _socialProfile_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _socialprofile_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _socialProfile_ProcessSessions?: Processsession[] | undefined;
    private _socialprofile_SocialActivities?: Socialactivity[] | undefined;
    private _socialProfile_SyncErrors?: Syncerror[] | undefined;
    private _socialprofileid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uniqueprofileid?: string | undefined;
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
     * Gets the _customerid_value property value. 
     * @returns a string
     */
    public get _customerid_value() {
        return this.__customerid_value;
    };
    /**
     * Sets the _customerid_value property value. 
     * @param value Value to set for the _customerid_value property.
     */
    public set _customerid_value(value: string | undefined) {
        this.__customerid_value = value;
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
     * Gets the _msdyn_octwitterhandleid_value property value. 
     * @returns a string
     */
    public get _msdyn_octwitterhandleid_value() {
        return this.__msdyn_octwitterhandleid_value;
    };
    /**
     * Sets the _msdyn_octwitterhandleid_value property value. 
     * @param value Value to set for the _msdyn_octwitterhandleid_value property.
     */
    public set _msdyn_octwitterhandleid_value(value: string | undefined) {
        this.__msdyn_octwitterhandleid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the blocked property value. 
     * @returns a boolean
     */
    public get blocked() {
        return this._blocked;
    };
    /**
     * Sets the blocked property value. 
     * @param value Value to set for the blocked property.
     */
    public set blocked(value: boolean | undefined) {
        this._blocked = value;
    };
    /**
     * Gets the community property value. 
     * @returns a integer
     */
    public get community() {
        return this._community;
    };
    /**
     * Sets the community property value. 
     * @param value Value to set for the community property.
     */
    public set community(value: number | undefined) {
        this._community = value;
    };
    /**
     * Instantiates a new socialprofile and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the customerid_account property value. 
     * @returns a account
     */
    public get customerid_account() {
        return this._customerid_account;
    };
    /**
     * Sets the customerid_account property value. 
     * @param value Value to set for the customerid_account property.
     */
    public set customerid_account(value: Account | undefined) {
        this._customerid_account = value;
    };
    /**
     * Gets the customerid_contact property value. 
     * @returns a contact
     */
    public get customerid_contact() {
        return this._customerid_contact;
    };
    /**
     * Sets the customerid_contact property value. 
     * @param value Value to set for the customerid_contact property.
     */
    public set customerid_contact(value: Contact | undefined) {
        this._customerid_contact = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Socialprofile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Socialprofile)._createdonbehalfby_value = n.getStringValue(); },
            "_customerid_value": (o, n) => { (o as unknown as Socialprofile)._customerid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Socialprofile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Socialprofile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_octwitterhandleid_value": (o, n) => { (o as unknown as Socialprofile)._msdyn_octwitterhandleid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Socialprofile)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Socialprofile)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Socialprofile)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Socialprofile)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Socialprofile)._transactioncurrencyid_value = n.getStringValue(); },
            "blocked": (o, n) => { (o as unknown as Socialprofile).blocked = n.getBooleanValue(); },
            "community": (o, n) => { (o as unknown as Socialprofile).community = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Socialprofile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Socialprofile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customerid_account": (o, n) => { (o as unknown as Socialprofile).customerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "customerid_contact": (o, n) => { (o as unknown as Socialprofile).customerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Socialprofile).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Socialprofile).importsequencenumber = n.getNumberValue(); },
            "influencescore": (o, n) => { (o as unknown as Socialprofile).influencescore = n.getNumberValue(); },
            "modifiedon": (o, n) => { (o as unknown as Socialprofile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Socialprofile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_customeroptout": (o, n) => { (o as unknown as Socialprofile).msdyn_customeroptout = n.getBooleanValue(); },
            "msdyn_ocfollowercount": (o, n) => { (o as unknown as Socialprofile).msdyn_ocfollowercount = n.getNumberValue(); },
            "msdyn_ocfollowingcount": (o, n) => { (o as unknown as Socialprofile).msdyn_ocfollowingcount = n.getNumberValue(); },
            "msdyn_ocfriendcount": (o, n) => { (o as unknown as Socialprofile).msdyn_ocfriendcount = n.getNumberValue(); },
            "msdyn_octwitterhandleid": (o, n) => { (o as unknown as Socialprofile).msdyn_octwitterhandleid = n.getObjectValue<Msdyn_octwitterhandle>(createMsdyn_octwitterhandleFromDiscriminatorValue); },
            "msdyn_phonenumber": (o, n) => { (o as unknown as Socialprofile).msdyn_phonenumber = n.getStringValue(); },
            "msdyn_profileimagelink": (o, n) => { (o as unknown as Socialprofile).msdyn_profileimagelink = n.getStringValue(); },
            "msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid": (o, n) => { (o as unknown as Socialprofile).msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Socialprofile).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Socialprofile).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Socialprofile).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Socialprofile).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "profilefullname": (o, n) => { (o as unknown as Socialprofile).profilefullname = n.getStringValue(); },
            "profilelink": (o, n) => { (o as unknown as Socialprofile).profilelink = n.getStringValue(); },
            "profilename": (o, n) => { (o as unknown as Socialprofile).profilename = n.getStringValue(); },
            "socialProfile_AsyncOperations": (o, n) => { (o as unknown as Socialprofile).socialProfile_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "socialprofile_cases": (o, n) => { (o as unknown as Socialprofile).socialprofile_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "socialprofile_connections1": (o, n) => { (o as unknown as Socialprofile).socialprofile_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "socialprofile_connections2": (o, n) => { (o as unknown as Socialprofile).socialprofile_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "socialProfile_DuplicateBaseRecord": (o, n) => { (o as unknown as Socialprofile).socialProfile_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "socialProfile_DuplicateMatchingRecord": (o, n) => { (o as unknown as Socialprofile).socialProfile_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "socialprofile_principalobjectattributeaccess": (o, n) => { (o as unknown as Socialprofile).socialprofile_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "socialProfile_ProcessSessions": (o, n) => { (o as unknown as Socialprofile).socialProfile_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "socialprofile_SocialActivities": (o, n) => { (o as unknown as Socialprofile).socialprofile_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "socialProfile_SyncErrors": (o, n) => { (o as unknown as Socialprofile).socialProfile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "socialprofileid": (o, n) => { (o as unknown as Socialprofile).socialprofileid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Socialprofile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Socialprofile).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Socialprofile).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Socialprofile).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uniqueprofileid": (o, n) => { (o as unknown as Socialprofile).uniqueprofileid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Socialprofile).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Socialprofile).versionnumber = n.getNumberValue(); },
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
     * Gets the influencescore property value. 
     * @returns a double
     */
    public get influencescore() {
        return this._influencescore;
    };
    /**
     * Sets the influencescore property value. 
     * @param value Value to set for the influencescore property.
     */
    public set influencescore(value: number | undefined) {
        this._influencescore = value;
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
     * Gets the msdyn_customeroptout property value. 
     * @returns a boolean
     */
    public get msdyn_customeroptout() {
        return this._msdyn_customeroptout;
    };
    /**
     * Sets the msdyn_customeroptout property value. 
     * @param value Value to set for the msdyn_customeroptout property.
     */
    public set msdyn_customeroptout(value: boolean | undefined) {
        this._msdyn_customeroptout = value;
    };
    /**
     * Gets the msdyn_ocfollowercount property value. 
     * @returns a integer
     */
    public get msdyn_ocfollowercount() {
        return this._msdyn_ocfollowercount;
    };
    /**
     * Sets the msdyn_ocfollowercount property value. 
     * @param value Value to set for the msdyn_ocfollowercount property.
     */
    public set msdyn_ocfollowercount(value: number | undefined) {
        this._msdyn_ocfollowercount = value;
    };
    /**
     * Gets the msdyn_ocfollowingcount property value. 
     * @returns a integer
     */
    public get msdyn_ocfollowingcount() {
        return this._msdyn_ocfollowingcount;
    };
    /**
     * Sets the msdyn_ocfollowingcount property value. 
     * @param value Value to set for the msdyn_ocfollowingcount property.
     */
    public set msdyn_ocfollowingcount(value: number | undefined) {
        this._msdyn_ocfollowingcount = value;
    };
    /**
     * Gets the msdyn_ocfriendcount property value. 
     * @returns a integer
     */
    public get msdyn_ocfriendcount() {
        return this._msdyn_ocfriendcount;
    };
    /**
     * Sets the msdyn_ocfriendcount property value. 
     * @param value Value to set for the msdyn_ocfriendcount property.
     */
    public set msdyn_ocfriendcount(value: number | undefined) {
        this._msdyn_ocfriendcount = value;
    };
    /**
     * Gets the msdyn_octwitterhandleid property value. 
     * @returns a msdyn_octwitterhandle
     */
    public get msdyn_octwitterhandleid() {
        return this._msdyn_octwitterhandleid;
    };
    /**
     * Sets the msdyn_octwitterhandleid property value. 
     * @param value Value to set for the msdyn_octwitterhandleid property.
     */
    public set msdyn_octwitterhandleid(value: Msdyn_octwitterhandle | undefined) {
        this._msdyn_octwitterhandleid = value;
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
     * Gets the msdyn_profileimagelink property value. 
     * @returns a string
     */
    public get msdyn_profileimagelink() {
        return this._msdyn_profileimagelink;
    };
    /**
     * Sets the msdyn_profileimagelink property value. 
     * @param value Value to set for the msdyn_profileimagelink property.
     */
    public set msdyn_profileimagelink(value: string | undefined) {
        this._msdyn_profileimagelink = value;
    };
    /**
     * Gets the msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid() {
        return this._msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid;
    };
    /**
     * Sets the msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid property value. 
     * @param value Value to set for the msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid property.
     */
    public set msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid = value;
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
     * Gets the profilefullname property value. 
     * @returns a string
     */
    public get profilefullname() {
        return this._profilefullname;
    };
    /**
     * Sets the profilefullname property value. 
     * @param value Value to set for the profilefullname property.
     */
    public set profilefullname(value: string | undefined) {
        this._profilefullname = value;
    };
    /**
     * Gets the profilelink property value. 
     * @returns a string
     */
    public get profilelink() {
        return this._profilelink;
    };
    /**
     * Sets the profilelink property value. 
     * @param value Value to set for the profilelink property.
     */
    public set profilelink(value: string | undefined) {
        this._profilelink = value;
    };
    /**
     * Gets the profilename property value. 
     * @returns a string
     */
    public get profilename() {
        return this._profilename;
    };
    /**
     * Sets the profilename property value. 
     * @param value Value to set for the profilename property.
     */
    public set profilename(value: string | undefined) {
        this._profilename = value;
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
        writer.writeStringValue("_customerid_value", this._customerid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_octwitterhandleid_value", this._msdyn_octwitterhandleid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeBooleanValue("blocked", this.blocked);
        writer.writeNumberValue("community", this.community);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Account>("customerid_account", this.customerid_account);
        writer.writeObjectValue<Contact>("customerid_contact", this.customerid_contact);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("influencescore", this.influencescore);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_customeroptout", this.msdyn_customeroptout);
        writer.writeNumberValue("msdyn_ocfollowercount", this.msdyn_ocfollowercount);
        writer.writeNumberValue("msdyn_ocfollowingcount", this.msdyn_ocfollowingcount);
        writer.writeNumberValue("msdyn_ocfriendcount", this.msdyn_ocfriendcount);
        writer.writeObjectValue<Msdyn_octwitterhandle>("msdyn_octwitterhandleid", this.msdyn_octwitterhandleid);
        writer.writeStringValue("msdyn_phonenumber", this.msdyn_phonenumber);
        writer.writeStringValue("msdyn_profileimagelink", this.msdyn_profileimagelink);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid", this.msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("profilefullname", this.profilefullname);
        writer.writeStringValue("profilelink", this.profilelink);
        writer.writeStringValue("profilename", this.profilename);
        writer.writeCollectionOfObjectValues<Asyncoperation>("socialProfile_AsyncOperations", this.socialProfile_AsyncOperations);
        writer.writeCollectionOfObjectValues<Incident>("socialprofile_cases", this.socialprofile_cases);
        writer.writeCollectionOfObjectValues<Connection>("socialprofile_connections1", this.socialprofile_connections1);
        writer.writeCollectionOfObjectValues<Connection>("socialprofile_connections2", this.socialprofile_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("socialProfile_DuplicateBaseRecord", this.socialProfile_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("socialProfile_DuplicateMatchingRecord", this.socialProfile_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("socialprofile_principalobjectattributeaccess", this.socialprofile_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("socialProfile_ProcessSessions", this.socialProfile_ProcessSessions);
        writer.writeCollectionOfObjectValues<Socialactivity>("socialprofile_SocialActivities", this.socialprofile_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("socialProfile_SyncErrors", this.socialProfile_SyncErrors);
        writer.writeStringValue("socialprofileid", this.socialprofileid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("uniqueprofileid", this.uniqueprofileid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the socialProfile_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get socialProfile_AsyncOperations() {
        return this._socialProfile_AsyncOperations;
    };
    /**
     * Sets the socialProfile_AsyncOperations property value. 
     * @param value Value to set for the SocialProfile_AsyncOperations property.
     */
    public set socialProfile_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._socialProfile_AsyncOperations = value;
    };
    /**
     * Gets the socialprofile_cases property value. 
     * @returns a incident
     */
    public get socialprofile_cases() {
        return this._socialprofile_cases;
    };
    /**
     * Sets the socialprofile_cases property value. 
     * @param value Value to set for the socialprofile_cases property.
     */
    public set socialprofile_cases(value: Incident[] | undefined) {
        this._socialprofile_cases = value;
    };
    /**
     * Gets the socialprofile_connections1 property value. 
     * @returns a connection
     */
    public get socialprofile_connections1() {
        return this._socialprofile_connections1;
    };
    /**
     * Sets the socialprofile_connections1 property value. 
     * @param value Value to set for the socialprofile_connections1 property.
     */
    public set socialprofile_connections1(value: Connection[] | undefined) {
        this._socialprofile_connections1 = value;
    };
    /**
     * Gets the socialprofile_connections2 property value. 
     * @returns a connection
     */
    public get socialprofile_connections2() {
        return this._socialprofile_connections2;
    };
    /**
     * Sets the socialprofile_connections2 property value. 
     * @param value Value to set for the socialprofile_connections2 property.
     */
    public set socialprofile_connections2(value: Connection[] | undefined) {
        this._socialprofile_connections2 = value;
    };
    /**
     * Gets the socialProfile_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get socialProfile_DuplicateBaseRecord() {
        return this._socialProfile_DuplicateBaseRecord;
    };
    /**
     * Sets the socialProfile_DuplicateBaseRecord property value. 
     * @param value Value to set for the SocialProfile_DuplicateBaseRecord property.
     */
    public set socialProfile_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._socialProfile_DuplicateBaseRecord = value;
    };
    /**
     * Gets the socialProfile_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get socialProfile_DuplicateMatchingRecord() {
        return this._socialProfile_DuplicateMatchingRecord;
    };
    /**
     * Sets the socialProfile_DuplicateMatchingRecord property value. 
     * @param value Value to set for the SocialProfile_DuplicateMatchingRecord property.
     */
    public set socialProfile_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._socialProfile_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the socialprofile_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get socialprofile_principalobjectattributeaccess() {
        return this._socialprofile_principalobjectattributeaccess;
    };
    /**
     * Sets the socialprofile_principalobjectattributeaccess property value. 
     * @param value Value to set for the socialprofile_principalobjectattributeaccess property.
     */
    public set socialprofile_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._socialprofile_principalobjectattributeaccess = value;
    };
    /**
     * Gets the socialProfile_ProcessSessions property value. 
     * @returns a processsession
     */
    public get socialProfile_ProcessSessions() {
        return this._socialProfile_ProcessSessions;
    };
    /**
     * Sets the socialProfile_ProcessSessions property value. 
     * @param value Value to set for the SocialProfile_ProcessSessions property.
     */
    public set socialProfile_ProcessSessions(value: Processsession[] | undefined) {
        this._socialProfile_ProcessSessions = value;
    };
    /**
     * Gets the socialprofile_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get socialprofile_SocialActivities() {
        return this._socialprofile_SocialActivities;
    };
    /**
     * Sets the socialprofile_SocialActivities property value. 
     * @param value Value to set for the Socialprofile_SocialActivities property.
     */
    public set socialprofile_SocialActivities(value: Socialactivity[] | undefined) {
        this._socialprofile_SocialActivities = value;
    };
    /**
     * Gets the socialProfile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get socialProfile_SyncErrors() {
        return this._socialProfile_SyncErrors;
    };
    /**
     * Sets the socialProfile_SyncErrors property value. 
     * @param value Value to set for the SocialProfile_SyncErrors property.
     */
    public set socialProfile_SyncErrors(value: Syncerror[] | undefined) {
        this._socialProfile_SyncErrors = value;
    };
    /**
     * Gets the socialprofileid property value. 
     * @returns a string
     */
    public get socialprofileid() {
        return this._socialprofileid;
    };
    /**
     * Sets the socialprofileid property value. 
     * @param value Value to set for the socialprofileid property.
     */
    public set socialprofileid(value: string | undefined) {
        this._socialprofileid = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the uniqueprofileid property value. 
     * @returns a string
     */
    public get uniqueprofileid() {
        return this._uniqueprofileid;
    };
    /**
     * Sets the uniqueprofileid property value. 
     * @param value Value to set for the uniqueprofileid property.
     */
    public set uniqueprofileid(value: string | undefined) {
        this._uniqueprofileid = value;
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
